/*
 * Copy this file and use it as a starting point for your custom cardinal color theme.
 * Just fill in or change the entries for the tokens you want to color
 * Keep in mind that more specific configurations override less specific ones.
 */

var colors = require('ansicolors');

// Change the below definitions in order to tweak the color theme.
module.exports = {

    'Boolean': {
      'true'   :  undefined
    , 'false'  :  undefined
    , _default :  undefined
    }

  , 'Identifier': {
      _default: undefined
    }

  , 'Null': {
      _default: undefined
    }

  , 'Numeric': {
      _default: colors.magenta
    }

  , 'String': {
      _default: colors.red
    }

 , 'Keyword': {
/*      'break'       :  colors.cyan

    , 'case'        :  colors.cyan
    , 'catch'       :  colors.cyan
    , 'class'       :  colors.cyan
    , 'const'       :  colors.cyan
    , 'continue'    :  colors.cyan

    , 'debugger'    :  colors.cyan
    , 'default'     :  colors.cyan
    , 'delete'      :  colors.cyan
    , 'do'          :  colors.cyan

    , 'else'        :  colors.cyan
    , 'enum'        :  colors.cyan
    , 'export'      :  colors.cyan
    , 'extends'     :  colors.cyan

    , 'finally'     :  colors.cyan
    , 'for'         :  colors.cyan
    , 'function'    :  colors.cyan

    , 'if'          :  colors.cyan
    , 'implements'  :  colors.cyan
    , 'import'      :  colors.cyan
    , 'in'          :  colors.cyan
    , 'instanceof'  :  colors.cyan
    , 'interface'   :  colors.cyan
    , 'let'         :  colors.cyan
    , 'new'         :  colors.cyan

    , 'package'     :  colors.cyan
    , 'private'     :  colors.cyan
    , 'protected'   :  colors.cyan
    , 'public'      :  colors.cyan

    , 'return'      :  colors.cyan
    , 'static'      :  colors.cyan
    , 'super'       :  colors.cyan
    , 'switch'      :  colors.cyan

    , 'this'        :  undefined
    , 'throw'       :  colors.cyan
    , 'try'         :  colors.cyan
    , 'typeof'      :  colors.cyan

    , 'var'         :  colors.cyan
    , 'void'        :  colors.cyan

    , 'while'       :  colors.cyan
    , 'with'        :  colors.cyan
    , 'yield'       :  colors.cyan
    , */ _default      :  colors.cyan
  }
  , 'Punctuator': {
      ';': undefined
    , '.': undefined
    , ',': undefined

    , '{': colors.green
    , '}': colors.green
    , '(': colors.brightBlack
    , ')': colors.brightBlack
    , '[': colors.yellow
    , ']': colors.yellow

    , '<': undefined
    , '>': undefined
    , '+': undefined
    , '-': undefined
    , '*': undefined
    , '%': undefined
    , '&': undefined
    , '|': undefined
    , '^': undefined
    , '!': undefined
    , '~': undefined
    , '?': undefined
    , ':': undefined
    , '=': undefined

    , '<=': undefined
    , '>=': undefined
    , '==': undefined
    , '!=': undefined
    , '++': undefined
    , '--': undefined
    , '<<': undefined
    , '>>': undefined
    , '&&': undefined
    , '||': undefined
    , '+=': undefined
    , '-=': undefined
    , '*=': undefined
    , '%=': undefined
    , '&=': undefined
    , '|=': undefined
    , '^=': undefined
    , '/=': undefined
    , '=>': undefined
    , '**': undefined

    , '===': undefined
    , '!==': undefined
    , '>>>': undefined
    , '<<=': undefined
    , '>>=': undefined
    , '...': undefined
    , '**=': undefined

    , '>>>=': undefined

    , _default: undefined
  }

    // line comment
  , Line: {
     _default: colors.blue
    }

    /* block comment */
  , Block: {
     _default: colors.blue
    }

  , _default: undefined
};
