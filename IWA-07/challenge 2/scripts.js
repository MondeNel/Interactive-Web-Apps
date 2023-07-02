const nickName = "Timmy";
const firstName = "Timothy";

if (nickName === "Timmy" || firstName !== "Timothy") {
    console.log(`Good Morning, ${nickName}!`);
} else {
    console.log(`Good Morning, ${firstName}!`);
}

/**
 * Another expression if nickName was not assigned a value.
 */

const nicknameExample = null; //  This is an intentional absence of a value.
const firstnameExample = "Timothy";

if(nicknameExample === "Timmy" || nicknameExample === undefined) {
    console.log(console.log(`Good Morning, ${nicknameExample}!`));
}else {
    console.log(`Good Morning, ${firstnameExample}!`);
}