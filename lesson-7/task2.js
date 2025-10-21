function recursiveFrom5(num) {
    console.log(num);
    if (num > 0) {
        recursiveFrom5(num - 1);
    }
}

recursiveFrom5(5);
