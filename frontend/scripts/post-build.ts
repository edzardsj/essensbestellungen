import { writeFileSync } from 'fs';

const robotTxtContent = `User-agent: *
Disallow: /
`;
writeFileSync('./dist/essensbestellung-frontend/browser/robot.txt', robotTxtContent);
console.log('✔️  added robot.txt');
