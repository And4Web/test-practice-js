// Asynchronous Javascript:
const {log: _} = window.console;

// Q38: Write an asynchronous function which executes callback after it finishes the asynchronous task.

// my example:
let user = {id: 478, name: "Anand"};

_("this comes first.")

function getUser(user, response, error=false){
  if(response){
    setTimeout(()=>{
      response(user);
    }, 2000)

  }
  if(error){
    setTimeout(()=>{
      throw new Error("something went wrong");
    }, 2000)
  }
}

getUser(user, (data)=>_(data))

_("this comes last.")


// What problem callbacks solve?
// 1. Callbacks allow us to make some asynchronous stuff and wait for the result.
// 2. We can build sharable things. The callback inside the setTimeout function an do multiple things at the same time.

// Q39: Execute the given list of asynchronous functions in parallel and return the result as an array to the callback:
const asyncFunc1 = (cb) => {
  setTimeout(()=>{
    cb(1);
  },3000)
}
const asyncFunc2 = (cb) => {
  setTimeout(()=>{
    cb(2);
  },2000)
}
const asyncFunc3 = (cb) => {
  setTimeout(()=>{
    cb(3);
  },1000)
}


function asyncParallel(asyncFuncs, callback){
  const resultArr = new Array(asyncFuncs.length);
  let counter = 0;

  asyncFuncs.forEach((func, index)=>{
    func((value)=>{
      resultArr[index] = value;
      counter++;
      if(counter >= asyncFuncs.length){
        callback(resultArr);
        
      }
    })
  })
  
}


asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], (result)=>{
  _(result);
})

// Q40: Create a promise function to be able to use callback function via promise approach.
const asyncFunc = (cb) => {
  setTimeout(()=>{
    cb(1)
  },2000)
}
asyncFunc((v)=>_("cb: ", v))
// using the above async func using promise:
const promisifyAsyncFunc = () => {
  return new Promise((resolve)=>{
    asyncFunc((data)=>{
      resolve(data);
    })
  })
}

promisifyAsyncFunc().then(data=>_("promisify: ", data))

// basics of promises:
const asyncPromise = () => {
 let promise = new Promise((res, rej)=>{
  if(res){
    setTimeout(() => {
      res(1)
    }, 3000);    
  }  
 })
 return promise
}
asyncPromise().then(d=>_("promise value: ", d)).catch(e=>_("Error: ", e))

// Q41: You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name and isActive:
const users = [
  {
    id: 1,
    name: "Anand"
  },
  {
    id: 2,
    name: "Shiva"
  },
  {
    id: 3,
    name: "Triveni"
  },
]

const userStatuses = [
  {
    id: 1, 
    isActive: true
  },
  {
    id: 2, 
    isActive: false
  },
  {
    id: 3, 
    isActive: true
  },
]

const getUsers = ()=>{
  return new Promise(res=>{
    res(users)
  })
};

const getUserStatuses = () => {
  return new Promise(res=>{
    res(userStatuses)
  })
}

// method1: easiest approach: sequential
/*
getUsers().then(users=>{
  getUserStatuses().then(statuses=>{
    const mappedUsers = users.map(user=>{
      const isActive = statuses.find(status=>status.id === user.id).isActive;
      return {...user, isActive};
    })
    _("mapped Users 1: ", mappedUsers);
  })
})
*/

// method2: parallel approach: using promise.all()

/*
const mapUsers = (users, userStatuses) => {
  return users.map(user=>{
    let isActive = userStatuses.find(status=>status.id === user.id).isActive;   
    return {...user, isActive};
  })
}
Promise.all([getUsers(), getUserStatuses()])
.then(([users, userStatuses])=>mapUsers(users, userStatuses))
.then(mappedUsers=>  _("mapped Users 2:", mappedUsers))
*/

// Q42: Rewrite the previous task using async-await:

const mapUsersFuncAsync = async () => {
  try {
    let users = await getUsers();
  let usersStatuses = await getUserStatuses();

  const mappedUsers = users.map(user=>{
    let isActive = usersStatuses.find(status=>status.id === user.id).isActive;
    return {...user, isActive};
  })
  _("mapped Users 3: ", mappedUsers);
  } catch (error) {
    _("Error: ", error);
  }
  
}

mapUsersFuncAsync();

// Q43: Design a utility which takes URL and value for attempts which will attempt to make a fetch request. If on failure it tries again with incresing delay for number of times which user has requested.

const requestManager = (url, options={}, attempts=3) => {
  return new Promise((resolve, reject)=>{
    fetch(url, options)
    .then(resolve)
    .catch((error)=>{
      let isLastAttempt = attempts === 1;
      if(isLastAttempt){
        return reject(error)
      }else{
        setTimeout(()=>{
          requestManager(url, options, attempts - 1).then(resolve).catch(reject)
        }, 4000);
        
      }
    })
  })
}

requestManager("https://foo.com").then(response=>_(response)).catch(err=>_("Error >>> ", err));

// Q44 onwards in script5.js