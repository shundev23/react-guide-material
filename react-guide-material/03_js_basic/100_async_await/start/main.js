// 非同期処理（await/async）
let a = 0;

init();
const btn_click = document.querySelector('button');
async function init(){
    try{
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const value = Math.random(0,90);
                document.getElementsByClassName("random-num")[0].textContent = value;
                if  (value / 2 == 0){
                    console.log(`${value}は偶数です`);
                }
                else{
                    console.log(`${value}は奇数です`);
                }
            }, 2000);
        })
        console.log(result);
    } catch(e) {
        console.log('catchが実行', e)
    }
}
btn_click.addEventListener('click', () => {
    init();
})