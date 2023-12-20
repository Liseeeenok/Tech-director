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
    let count_number = 0;
    let count_str = 0;
    for (let i = 0; i < arr.length; i++) {
        let str_min, ind_min, number_max, ind_max;
        let end = true;
        for (let j = count_str; j < arr.length - count_number; j++) {
            if (Number(arr[j])) {
                if ((!number_max || number_max < Number(arr[j])) && j != arr.length - count_number - 1) {
                    number_max = Number(arr[j]);
                    ind_max = j;
                    end = false;
                }
            } else {
                if ((!str_min || str_min > arr[j]) && j != count_str) {
                    str_min = arr[j];
                    ind_min = j;
                    end = false;
                }
            }
        }
        if (end) break;
        if (ind_min)  {
            if (ind_min > ind_max) ind_max++;
            arr.splice(ind_min, 1);
            arr.unshift(str_min);
            count_str++;
        }
        if (ind_max || ind_max == 0) {
            arr.splice(ind_max, 1);
            arr.push(number_max);
            count_number++;
        }
        answer.innerHTML += '<div>'+ (i + 1) + ') ' + arr+ '</div>';
    }

} 