import assert from "assert";
import { add,mydemoapp} from "../build/release.js";
assert.strictEqual(add(1, 2), 3);
assert.equal(mydemoapp(1, 4), 5);
console.log("ok");