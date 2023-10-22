import './style.css'
import Stack from './stack';

const OPCode = {
  'hlt': 'hlt',
  'const': 'const',
  'add': 'add',
  'mul': 'mul'
}

const vm = {
  pc: 0,
  sp: 0
}

const stack = Stack()
function pushToStack(v) {
  stack.push(v)
  traceOp(v)
}

const program = [
  OPCode.const, 1,  // can be made a new opcode
  OPCode.const, 3,
  OPCode.add,
  OPCode.const, 2,
  OPCode.mul,
  OPCode.hlt
]

let v
do {
  v = program[vm.pc]
  traceOp(v);

  switch (v) {
    case OPCode.const:
      // get new op
      vm.pc++;
      const op = program[vm.pc]
      pushToStack(op)
      break;

    case OPCode.add:
      stack.push(stack.pop() + stack.pop());
      vm.sp -= 2
      break;

    case OPCode.mul:
      stack.push(stack.pop() * stack.pop());
      vm.sp -= 2
      break;
  }

  vm.pc++;
} while (v !== OPCode.hlt)

function traceOp(code) {
  console.log(vm.pc + ': ' + code, '\t\t STACK: ' + stack.getValue())
}