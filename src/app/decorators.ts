import {PROP_DECORATORS} from "@angular/compiler-cli/ngcc/src/host/esm2015_host";

export function Log(target, propertyKey, descriptor){
 debugger
}
export function MakeReadOnly(target, propertyKey, descriptor){
  return{
    ...descriptor,
    writable:false
  }
}
