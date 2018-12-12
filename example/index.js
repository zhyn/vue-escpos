import Printer from '../lib/printer';
import Console from '../lib/console';
let resultStr;
const printOut = function(data) {
    resultStr = data.toString("hex");
}

const device  = new Console(printOut);

const options = { encoding: "GB18030" /* default */ }

const printer = new Printer(device, options);

const receive = (data = {})=>{
    device.open(function(){
        printer
            .text('示例')
            .align('lt')
            .text('出货单')
            .print('\x1B\x44\x12\x19\x24\x00')
            .pureText('编码').control('HT').pureText('数量').control('HT').pureText('金额').control('LF')
            .pureText('GS-32').control('HT').pureText('5').control('HT').pureText('$120').control('LF')
            printer.cut();
            printer.close();
        });
        return resultStr;
}


export default {
    receive: receive,
}
