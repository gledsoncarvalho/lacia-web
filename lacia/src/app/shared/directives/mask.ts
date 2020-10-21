import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Renderer2, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import * as _moment from 'moment';
import * as _rollupMoment from 'moment';
const moment = _rollupMoment || _moment;

@Directive({
  host: {
    '(change)': '_onChange($event.target.value)',
    '(input)': 'writeValue($event.target.value)',
    '(blur)': '_onTouched()'
  },
  selector: '[Mask]'
})
export class MaskDirective implements ControlValueAccessor, AfterViewInit {

  public static cpfInvalido: String = "Cpf inválido";
  public static invalidos: String[] = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"];

  public static cnpjInvalido: String = "Cnpj inválido";
  public static cnpjInvalidos: String[] = ["00000000000000", "11111111111111", "22222222222222", "33333333333333", "44444444444444", "55555555555555", "66666666666666", "77777777777777", "88888888888888", "99999999999999"];


  @Input() maxlength: number;
  public teste: EventEmitter<any> = new EventEmitter();
  public control: NgControl;
  @Input() mask: string;

  constructor(
    @Self() ngControl: NgControl,
    public _renderer: Renderer2,
    public _elementRef: ElementRef,
    public changeDetectorRef: ChangeDetectorRef) {
    this.control = ngControl;
  }

  public _onChange(value: any) {
    if (value) {
      this.control.control.setValue(value.replace(/\D/g, ''));
      this.setInput(value);
    }
  }

  public setInput(value: any) {
    const val: ElementRef = this._elementRef;
    let v = val.nativeElement.value;
    switch (this.mask) {
      case 'telefone': {
        v = v.replace(/\D/g, '');
        v = v.replace(/^(\d\d)(\d)/g, '($1) $2');
        v = v.replace(/(\d{4})(\d)/, '$1-$2');
        val.nativeElement.value = v;
        break;
      }
      case 'celular': {
        v = v.replace(/\D/g, '');
        v = v.replace(/^(\d\d)(\d)/g, '($1) $2');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
        val.nativeElement.value = v;
        break;
      }
      case 'cpf': {
        v = v.replace(/\D/g, '');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        val.nativeElement.value = v;
        break;
      }
      case 'cnpj':
        v = v.replace(/\D/g, '');
        v = v.replace(/^(\d{2})(\d)/, '$1.$2');
        v = v.replace(/^(\d{2}).(\d{3})(\d)/, '$1.$2.$3');
        v = v.replace(/.(\d{3})(\d)/, '.$1/$2');
        v = v.replace(/(\d{4})(\d)/, '$1-$2');
        val.nativeElement.value = v;

        if (value && value.length === 18) {
          const controle = value.replace(/\D/g, '');
          if (!this.basicValidation(controle)) {
            this.control.control.setValue('');
          } else {
            // Valida DVs
            let tamanho: number = 12;
            let numeros: String = controle.substring(0, tamanho);
            let digitos: String = controle.substring(tamanho);

            let dv1: number = 0;
            let pos: number = tamanho - 7;
            for (let i = tamanho; i >= 1; i--) {
              dv1 += +numeros.charAt(tamanho - i) * pos--;
              if (pos < 2) {
                pos = 9;
              }
            }
            let resultado = dv1 % 11 < 2 ? 0 : 11 - dv1 % 11;
            if (resultado !== +digitos.charAt(0)) {
              this.control.control.setValue('');
            } else {
              tamanho = tamanho + 1;
              numeros = controle.substring(0, tamanho);
              let dv2: number = 0;
              pos = tamanho - 7;
              for (let i = tamanho; i >= 1; i--) {
                dv2 += +numeros.charAt(tamanho - i) * pos--;
                if (pos < 2) {
                  pos = 9;
                }
              }
              resultado = dv2 % 11 < 2 ? 0 : 11 - dv2 % 11;
              if (resultado !== +digitos.charAt(1)) {
                this.control.control.setValue('');
              }
            }
          }
        }
        break;
      case 'dinheiro':
        v = v.replace(/\D/g, '');
        v = v.replace(/(\d{1})(\d{14})$/, '$1.$2');
        v = v.replace(/(\d{1})(\d{11})$/, '$1.$2');
        v = v.replace(/(\d{1})(\d{8})$/, '$1.$2');
        v = v.replace(/(\d{1})(\d{5})$/, '$1.$2');
        v = v.replace(/(\d{1})(\d{1,2})$/, '$1,$2');
        val.nativeElement.value = v;
        break;
      case 'cep': {
        v = v.replace(/\D/g, '');
        v = v.replace(/(\d{2})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,3})$/, '$1-$2');
        val.nativeElement.value = v;
        break;
      }
      case 'data': {
        v = moment(v).format('YYYY-MM-DD');
        v = v.replace(/\D/g, '');
        v = v.replace(/^(\d{2})(\d)/, '$1/$2');
        v = v.replace(/(\d{2})(\d)/, '$1/$2');
        val.nativeElement.value = v;
        break;
      }
      case 'medidas': {
        v = v.replace(/\D/g, '');
        v = v.replace(/(\d{1})(\d{15})$/, '$1.$2');
        v = v.replace(/(\d{1})(\d{12})$/, '$1.$2');
        v = v.replace(/(\d{1})(\d{9})$/, '$1.$2');
        v = v.replace(/(\d{1})(\d{6})$/, '$1.$2');
        v = v.replace(/(\d{1})(\d{1,3})$/, '$1,$2');
        val.nativeElement.value = v;
        break;
      }
      default:
        break;
    }

  }

  public _onTouched() {
    this.control.control.markAsTouched();
    this.setInput(this.control.control.value);
  }

  ngAfterViewInit(): void {
    this._onChange(this.control.control.value);
    this.control.control.valueChanges.subscribe(res => {
      this.setInput(res);
    });
  }

  writeValue(value: any) {
    this._onChange(value);
  }

  registerOnChange(fn: (value: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  public basicValidation(cpfCnpj: String): boolean {
    if (cpfCnpj && cpfCnpj.length === 11) {
      return !MaskDirective.invalidos.some(input => input === cpfCnpj);
    } else { return !MaskDirective.cnpjInvalidos.some(input => input === cpfCnpj); }
  }
}









