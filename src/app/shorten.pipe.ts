import { OnInit, Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shorten",
})
export class Shortenpipe implements PipeTransform {
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.trim().substr(0, limit) + "...";
    }
    return value;
  }
}
