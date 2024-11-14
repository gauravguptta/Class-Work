function rollnumber(num, delay, nextroll) {
    setTimeout(() => {
        console.log("Roll number is", num);
        if (nextroll) nextroll();
    }, delay);
}

rollnumber(12121, 1000, () => {
    rollnumber(12321, 2000, () => {
        rollnumber(12421, 3000, () => {
            rollnumber(12121, 4000,);
        });
    });
});    