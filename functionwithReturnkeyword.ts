
function getNumber():Promise <number>
  {
    return Promise.resolve(10);
  }
  getNumber().then((number)=>{
    console.log(number);
  });



  function trainerName():Promise<string>{
    return Promise.resolve("Ravikumar")
}
  trainerName().then((tr)=>{
    console.log(tr);
  });


  type userType = {name: string; age: number};

function getUserData(): Promise<userType> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let user = {
                name: 'Anuja',
                age: 30
            };
            resolve(user);
        }, 3000);
    });
}
//getUserData().then((myUser) => console.log(myUser)); //

//async function is used to wait for the promise to resolve
async function getmyUserData(){
    const user = await getUserData();
    console.log(user);
}
getmyUserData();

// PM:
function click(element: string): Promise<void> {
    console.log('click on', element);
    return Promise.resolve();
}

// generic util/function
async function doClick(element: string) {
    await click(element);
}
// in test code:
doClick('forgotPasswordLink');