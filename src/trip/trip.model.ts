/* eslint-disable prettier/prettier */
export class Trip {
    constructor(
        public startAddress: string,
        public destinationAddress: string, 
        public price: number, 
        public date: string
    ) {}
}