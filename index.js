let input = document.getElementById('mytext');
input.addEventListener('input', autoresize);

let sort = document.getElementById('sort');
sort.addEventListener('click', sort_arr);

let answer = document.getElementById('answer');

function autoresize() {
  let size = input.scrollWidth;
  input.style.width = size + 5 + 'px';
  input.style.transition = "none";
}

function sort_arr() {
    let arr = input.value.split(' ');
    answer.innerHTML = '';
    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
        let str_min, ind_min, number_max, ind_max;
        for (let j = i; j < arr.length - i; j++) {
            if (Number(arr[j])) {
                if (!number_max || number_max < Number(arr[j])) {
                    number_max = Number(arr[j]);
                    ind_max = j;
                }
            } else {
                if (!str_min || str_min > arr[j]) {
                    str_min = arr[j];
                    ind_min = j;
                }
            }
        }
        if (ind_min > ind_max) ind_max++;
        if (ind_min)  {
            arr.splice(ind_min, 1);
            arr.unshift(str_min);
        }
        if (ind_max) {
            arr.splice(ind_max, 1);
            arr.push(number_max);
        }
        answer.innerHTML += '<div>'+ (i + 1) + ') ' + arr+ '</div>';
    }

} 