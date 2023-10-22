function stack() {
  const _st = [];
  return {
    push(v) {
      _st.push(v);
    },
    pop(v) {
      const ret = _st.pop()
      if (ret == null) {
        throw new Error('Stack Error:', 'EMPTY_STACK')
      }
      return ret;
    },
    getValue() { return _st }
  }
}

export default stack