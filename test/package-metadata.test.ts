import assert from "node:assert/strict";
import { test } from "vitest";
import packageJson from "../package.json" with { type: "json" };

test("publishes the scoped package with fork metadata", () => {
  assert.equal(packageJson.name, "@diegopetrucci/pi-anthropic-auth");
  assert.match(
    packageJson.version,
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/,
  );
  assert.deepEqual(packageJson.author, { name: "Chris Lasher" });
  assert.deepEqual(packageJson.repository, {
    type: "git",
    url: "git+https://github.com/diegopetrucci/pi-anthropic-auth.git",
  });
  assert.equal(
    packageJson.homepage,
    "https://github.com/diegopetrucci/pi-anthropic-auth#readme",
  );
  assert.deepEqual(packageJson.bugs, {
    url: "https://github.com/diegopetrucci/pi-anthropic-auth/issues",
  });
  assert.equal(packageJson.publishConfig.access, "public");
});
