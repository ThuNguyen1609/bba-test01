function capSoChiaHetCho17() {
    for (let a = 1; a < 100; a++) {
        for (let b = 2; b <= 100; b++) {
            if ((a + b) % 17 === 0) {
                console.log(a,b);
            }
        }
    }
}
capSoChiaHetCho17();