import javascriptGenerator from '../javascriptGenerator';
import registerBlock from '../register';

const categoryPrefix = 'looks_';
const categoryColor = '#9966ff';

function register() {
    registerBlock(`${categoryPrefix}setsize`, {
        message0: 'set size to %1',
        args0: [
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC);
        const code = `util.target.setSize(${VALUE || 0})`;
        return `${code}\n`;
    })
    registerBlock(`${categoryPrefix}changesize`, {
        message0: 'change size by %1',
        args0: [
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        previousStatement: null,
        nextStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        const VALUE = javascriptGenerator.valueToCode(block, 'VALUE', javascriptGenerator.ORDER_ATOMIC);
        const code = `util.target.setSize(util.target.size + ${VALUE || 0})`;
        return `${code}\n`;
    })
    registerBlock(`${categoryPrefix}size`, {
        message0: 'size',
        args0: [],
        output: null,
        previousStatement: null,
        inputsInline: true,
        colour: categoryColor
    }, (block) => {
        return [`util.target.size`, javascriptGenerator.ORDER_ATOMIC];
    })
}

export default register;
