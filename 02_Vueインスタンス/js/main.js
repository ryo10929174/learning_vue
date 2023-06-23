// データオブジェクト
var data = { a: 1 }

// Vue インスタンスにオブジェクトを追加する
var vm = new Vue({
  data: data
})

// インスタンスのプロパティを取得すると、
// 元のデータからそのプロパティが返されます
console.log(vm.a == data.a) // => true

// プロパティへの代入は、元のデータにも反映されます
vm.a = 2
console.log(data.a) // => 2

// ... そして、その逆もまたしかりです
data.a = 3
console.log(vm.a) // => 3

// これに対する唯一の例外は、既存のプロパティの変更を防ぐ Object.freeze（）の使用です。これはリアクティブシステムが変更を 追跡 することができないことも意味します。
var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})

new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` は vm インスタンスを指します
    console.log('a is: ' + this.a)
  }
})