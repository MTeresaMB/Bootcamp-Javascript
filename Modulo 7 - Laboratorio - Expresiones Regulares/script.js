const pattern = /^(ES\d{2})\d{20}|(ES\d{2})\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
const values = ["ES9820385778983000760236", "ES66 0019 0020 9612 3456 7890"];

values.forEach(value =>{
  console.log('Regexp matchs with ' + value + ' ? -> ', pattern.test(value));
  console.log(pattern.exec(value));
});

const pattern2 = /^(\d{4})(\s|-|_)?([A-Z]{3})$/;
const values2 = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];

values2.forEach(value =>{
  console.log('Regexp matchs with ' + value + ' ? -> ', pattern2.test(value));
  console.log(pattern2.exec(value));
});

const pattern3 = /^50|51|52|53|54|55$/;
const values3 = ["5299 64000 000 000", "5299-64000-000-000", "529964000000000"];

values3.forEach(value =>{
  console.log('Regex matchs with ' + value + '? ->', pattern3.exec(value));
})

const pattern4 = /(https.+\.(png|jpg))/g;
const values4 = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

console.log(values4.match(pattern4));

