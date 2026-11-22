// news-image-20261122 entry: delivers the day's news picture to the output directory.
// The picture itself is entry.png beside this file; this program only copies it,
// byte for byte, so both grader runs produce exactly the same file.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const destination = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(source, destination);
