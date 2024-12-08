// 非同期処理（Promise）
let a = 0;

// 非同期処理
new Promise((resoleve, reject) => {
    setTimeout(() => {
        a = 1;
        resoleve(a)
    }, 2000);
}).then((b) => {
    console.log(b);
    return b;
}).then((b) => {
    console.log(b);
}).catch((c) =>{
    console.log('catchが実行', c)
})