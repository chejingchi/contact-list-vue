import {Toast} from 'mint-ui'

const checkIsEmpty = (...params) => {
  for (let param of params) {
    if (param.value.length === 0) {
      Toast({
        message: param.message,
        position: 'center',
        duration: 2000
      })
      return false
    }
  }
  return true
}
export default {
  checkIsEmpty
}
