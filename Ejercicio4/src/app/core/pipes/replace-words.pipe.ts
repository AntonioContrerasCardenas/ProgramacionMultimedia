import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceWords',
  standalone: true,
})
export class ReplaceWordsPipe implements PipeTransform {
  transform(originalString: string, bannedWords: string): string {
    const bannedWordsArray = bannedWords.split(',');

    return originalString
      .split(' ')
      .map((p) => (bannedWordsArray.includes(p) ? '*' : p))
      .join(' ');
  }
}
