const point_num: number = 1000000;	// 点を打つ回数(多いほど精度が上がる)
let inside_num: number = 0;			// 点が円の中に入った回数

for(let i = 0; i < point_num; i++){
	let x: number = Math.random();	// 0から1までの乱数を取得
	let y: number = Math.random();	// 0から1までの乱数を取得
	if( x * x + y * y < 1 ){		// 円の中に入ったかどうかをチェック(x^2+y^2=1)
		inside_num += 1;
	}
}
console.log(inside_num * 4 / point_num); // 正方形の面積が4倍なので、4倍した値が円周率
