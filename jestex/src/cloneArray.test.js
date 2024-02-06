const cloneArray=require("./cloneArray")
test("properly cloned",()=>{
    const array=[1,2,3];
    expect(cloneArray(array)).toEqual(array)
})
