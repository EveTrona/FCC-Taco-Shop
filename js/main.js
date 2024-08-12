const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

sum = 0
count = 0
do {
    count++
    if (count % 3 == 0 && count != 12) {
        continue ;
    }
    sum += count
    if (count % 2 != 0) {
        continue
    }
}
while (count <= 10) {
    console.log(sum)
}