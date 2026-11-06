const fs = require('fs');

// อ่านไฟล์ทั้ง 4 ตามลำดับ แล้วนำข้อความมาต่อกัน (คั่นด้วยขึ้นบรรทัดใหม่)
fs.readFile('head.txt', 'utf8', (err, head) => {
  if (err) return console.error('อ่าน head.txt ไม่สำเร็จ:', err);

  fs.readFile('body.txt', 'utf8', (err, body) => {
    if (err) return console.error('อ่าน body.txt ไม่สำเร็จ:', err);

    fs.readFile('leg.txt', 'utf8', (err, leg) => {
      if (err) return console.error('อ่าน leg.txt ไม่สำเร็จ:', err);

      fs.readFile('feet.txt', 'utf8', (err, feet) => {
        if (err) return console.error('อ่าน feet.txt ไม่สำเร็จ:', err);

        const result = [head, body, leg, feet].join('\n');

        fs.writeFile('robot.txt', result, (err) => {
          if (err) return console.error('เขียน robot.txt ไม่สำเร็จ:', err);
          console.log('สร้าง robot.txt เรียบร้อยแล้ว');
        });
      });
    });
  });
});
