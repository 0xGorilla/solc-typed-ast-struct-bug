import { compileSol } from "solc-typed-ast";

(async () => {
    const result = await compileSol('sample.sol', 'auto');
    const structNode = result.data.sources['sample.sol'].ast.nodes[1].nodes[0];
    console.log(structNode);

    if (structNode.documentation) {
        console.log('Hooraay!')
    } else {
        console.log('No documentation :(')
    }
})();
