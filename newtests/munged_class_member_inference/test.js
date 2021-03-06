/* @flow */


import {suite, test} from '../../tsrc/test/Tester';

export default suite(({addFile, addFiles, addCode}) => [
  test('Munged instance fields does not require annotation within init values', [
    addCode('export class Foo { _a = (p) => 42; }')
      .noNewErrors(''),
  ]),

  test('Munged instance methods does not require annotation', [
    addCode('export class Foo { _a(p) {} }')
      .noNewErrors(''),
  ]),

]);
