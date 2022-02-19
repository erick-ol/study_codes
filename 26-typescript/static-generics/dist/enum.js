"use strict";
// enum StudentStatus {
//   Active,
//   Inactive,
//   Paused
// }
// let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
// console.log(newStudentStatus); //saída: 1
// enum StudentStatus {
//   Active = 1,
//   Inactive,
//   Paused
// }
// let newStudentStatus: StudentStatus = StudentStatus.Inactive;
// console.log(newStudentStatus); //saída: 2
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];
console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest
var directionsGamePad;
(function (directionsGamePad) {
    directionsGamePad["UP"] = "UP";
    directionsGamePad["DOWN"] = "DOWN";
    directionsGamePad["LEFT"] = "LEFT";
    directionsGamePad["RIGTH"] = "RIGHT";
})(directionsGamePad || (directionsGamePad = {}));
