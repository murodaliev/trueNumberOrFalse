let a = +prompt("son kiriting");
while (isNaN(a) || a == 0 ) {
    a = +prompt("kiritilgan ma'lumot son emas yoki enter bosilib ketgan")   
};
if(a % 2 == 1) {
    alert("siz kiritgan son toq");
}
else{
    alert('siz kiritgan son juft');
};
