const stars = 5;
let result;

switch (stars) {
  case 1:
        {result = 1;
        console.log(`Отель ${result} звезд`);}
    break;
  case 2:
        {
          result = 2;
          console.log(`Отель ${result} звезд`);
        }
    break;
  case 3:
        {
          result =3;
          console.log(`Отель ${result} звезд`);
        }
    break;
  case 4:
       {
         result = 4;
         console.log(`Отель ${result} звезд`);
       }
    break;
  case 5:
       {
         result = 5;
         console.log(`Отель ${result} звезд`);
       };
    break;
  default:
    console.log(`Неверный ввод данных`);
}
