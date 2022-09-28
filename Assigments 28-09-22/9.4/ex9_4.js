let char = '#'
const repeatHash = (n) => {
for (i = 1 ; i <= n; i++){
    console.log(char.repeat(i));
}
}
repeatHash(5);