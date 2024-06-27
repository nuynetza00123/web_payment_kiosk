<template>
  <div>
    <!-- <v-row justify="center" align="center">
      <v-col class="text-center">
        {{ offsetTop }}
      </v-col>
    </v-row> -->
    <!-- asdasdasd {{ offsetTop }}{{$i18n.locale}} -->
    <v-card elevation="0">
      <v-container>
        <v-row>
          <v-card
            id="scroll-target"
            width="900"
            height="1200"
            style="
                background-color: white;
                border-style: solid;
                border-color: #126496;
              "
            class="pa-4 mx-auto overflow-y-auto mostly-customized-scrollbar"
          >
            <v-row class="pl-5 pr-5" v-scroll:#scroll-target="onScroll">
              <div v-if="$i18n.locale == 'th'">
                <div style="clear:both;">
                  <p
                    style="margin-top: 0pt; margin-bottom: 0pt; text-align: left; line-height: normal;"
                  >
                    <strong
                      ><span style="font-family:'Angsana New'; font-size:14pt;"
                        >นโยบายความเป็นส่วนตัว</span
                      ></strong
                    >
                  </p>
                </div>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"></span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">วันแบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"></span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(&ldquo;</span
                  ><span style="font-family:'Angsana New';">บริษัท</span
                  ><span style="font-family:'DB Ozone X';"
                    >&rdquo;, &ldquo;</span
                  ><span style="font-family:'Angsana New';">เรา</span
                  ><span style="font-family:'DB Ozone X';">&rdquo;,&nbsp;</span
                  ><span style="font-family:'Angsana New';">หรือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&ldquo;</span
                  ><span style="font-family:'Angsana New';">ของเรา</span
                  ><span style="font-family:'DB Ozone X';">&rdquo;)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ให้คำมั่นสัญญาว่าจะปกป้องข้อมูลส่วนบุคคลของคุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';"
                    >ดังคำจำกัดความด้านล่าง</span
                  ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราทราบถึงความกังวลของคุณต่อวิธีการที่เราเก็บรวมรวม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เปิดเผย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >หรือถ่ายโอนข้อมูลเกี่ยวกับคุณไปยังภายนอกประเทศ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยข้อมูลที่คุณแบ่งปันให้กับเรานั้นจะช่วยให้เราสามารถจัดหาสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ได้เหมาะสมกับความจำเป็นและความต้องการของคุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งไม่ใช่เพียงการจัดหาสินค้าและบริการจากเราเท่านั้น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >แต่ยังรวมถึงบริษัทอื่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ในกลุ่มวันแบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';"
                    >ดังคำจำกัดความด้านล่าง</span
                  ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                  ><span style="font-family:'Angsana New';">อีกด้วย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราซาบซึ้งถึงการที่ท่านได้ให้ความไว้วางใจ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และเราจะจัดการกับข้อมูลส่วนบุคคลของคุณด้วยความระมัดระวังและสมเหตุสมผล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยที่คุณจะได้รับประสบการณ์และการบริการลูกค้าที่เป็นส่วนตัวจากเรา</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >ประกาศความเป็นส่วนตัวฉบับนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(&ldquo;</span
                  ><span style="font-family:'Angsana New';">ประกาศ</span
                  ><span style="font-family:'DB Ozone X';">&rdquo;)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >อธิบายถึงการเก็บรวบรวม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เปิดเผย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และการถ่ายโอนข้อมูลส่วนบุคคล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';"
                    >ดังคำจำกัดความด้านล่าง</span
                  ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >รวมทั้งสิทธิด้านการคุ้มครองข้อมูลของบุคคลภายนอกองค์กรของเราซึ่งเป็นบุคคลที่เรามีการติดต่อด้วยและมีข้อมูลส่วนบุคคล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';"
                    >ดังคำจำกัดความด้นล่าง</span
                  ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ที่เราจัดการดูแลอยู่ในการดำเนินธุรกิจของเรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือเกี่ยวข้องกับสินค้าหรือบริการต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ที่เราจัดหาให้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ได้แก่</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(i)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ลูกค้าซึ่งเป็นบุคคลทั่วไป</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(ii)&nbsp;</span
                  ><span style="font-family:'Angsana New';">ผู้ติดต่อ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">พนักงาน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บุคลากร</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ได้รับมอบอำนาจ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ผู้แทน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ตัวแทน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">กรรมการ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ผู้ถือหุ้น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือบุคคลใดก็ตามที่มีอำนาจจัดตั้งความสัมพันธ์ทางธุรกิจหรือเข้าร่วมในธุรกรรมใดๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ในนามของบริษัทลูกค้าของเรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >รวมถึงบริษัทในเครือของบริษัทลูกค้า</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(iii)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ใช้หรือผู้เข้าชมเว็บไซต์ของเรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&nbsp;</span
                  ><span style="font-family:'DB Ozone X';">(iv)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ที่รับสินค้าและบริการของเรารายอื่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(v)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บุคคลอื่นใดที่เราได้รับข้อมูลส่วนบุคคล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';"
                    >ดังคำจำกัดความด้านล่าง</span
                  ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ของบุคคลเหล่านั้นมา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งรวมกันเรียกว่า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&ldquo;</span
                  ><span style="font-family:'Angsana New';">คุณ</span
                  ><span style="font-family:'DB Ozone X';">&rdquo;&nbsp;</span
                  ><span style="font-family:'Angsana New';">หรือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&ldquo;</span
                  ><span style="font-family:'Angsana New';">ของคุณ</span
                  ><span style="font-family:'DB Ozone X';">&rdquo;)</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >นโยบายความเป็นส่วนตัวฉบับนี้ยังใช้กับเว็บไซต์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >แอปพลิเคชันบนมือถือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เว็บไซต์เครือข่ายสังคม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ช่องทางการสื่อสารออนไลน์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การจัดงานและกิจกรรมต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >รวมถึงสถานที่ตั้งอื่นที่เรามีการเก็บรวบรวมข้อมูลส่วนบุคคลของคุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">อย่างไรก็ตาม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ขอความกรุณาให้คุณอ่านนโยบายความเป็นส่วนตัวฉบับนี้รวมถึงข้อกำหนดและเงื่อนไขต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ของบริการใด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ที่คุณใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งอาจมีการกำหนดขึ้นต่างหากเกี่ยวข้องกับข้อมูลส่วนบุคคลที่เราเก็บรวบรวมเกี่ยวกับคุณ</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >เราอาจทบทวนและแก้ไขนโยบายความเป็นส่วนตัวฉบับนี้เป็นครั้งคราวเพื่อให้สอดคล้องกับการเปลี่ยนแปลงของกฎหมายที่ใช้บังคับ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และการเปลี่ยนแปลงด้านวิธีการที่เราใช้ในการจัดการกับข้อมูลส่วนบุคคล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ขอให้คุณคอยติดตามตรวจสอบนโยบายความเป็นส่วนตัวของเราเป็นครั้งคราวเพื่อรับทราบถึงการเปลี่ยนแปลงอยู่ตลอดเวลา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยการเปลี่ยนแปลงใดๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ในโยบายความเป็นส่วนตัวฉบับนี้จะมีผลเมื่อเราได้ประกาศนโยบายความเป็นส่วนตัวฉบับแก้ไขขึ้นบนเว็บไซต์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">แอปพลิเคชัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือช่องทางการสื่อสารอื่นๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ของเรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราจะมีการแจ้งเพิ่มเติมเกี่ยวกับการปรับแก้ไขที่สำคัญๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1.&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลส่วนบุคคลที่เราเก็บรวบรวม</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'DB Ozone X';">&ldquo;</span
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลส่วนบุคคล</span
                    ></strong
                  ><span style="font-family:'DB Ozone X';">&rdquo;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หมายถึงข้อมูลที่ระบุถึงหรือสามารถระบุตัวตนเกี่ยวกับตัวคุณได้ดังแสดงรายการด้านล่างนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อเสนอสินค้าและบริการของเราให้กับคุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลโดยตรง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';">เช่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ผ่านตัวแทน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">พนักงาน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;[</span
                  ><span style="font-family:'Angsana New';"
                    >เจ้าหน้าที่ลูกค้าสัมพันธ์</span
                  ><span style="font-family:'DB Ozone X';">]&nbsp;</span
                  ><span style="font-family:'Angsana New';">พนักงานขาย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เจ้าหน้าที่</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ศูนย์บริการข้อมูลทางโทรศัพท์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >แอปพลิเคชันของเรา</span
                  ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือผ่านบริษัทแม่</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หุ้นส่วนทางธุรกิจของเรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">หน่วยงานราชการ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือบุคคลภายนอก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยประเภทของข้อมูลที่มีการเก็บรวบรวมนั้นจะขึ้นอยู่กับบริบทการปฏิสัมพันธ์ของคุณที่มีกับเรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >รวมทั้งบริการหรือสินค้าต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ที่คุณจำเป็นหรือต้องการจากเราและจากภายในกลุ่มวันแบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&ldquo;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหว</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&rdquo;&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';"
                    >หมายถึงข้อมูลส่วนบุคคลที่กฎหมายได้จำแนกประเภทไว้ว่าเป็นข้อมูลที่มีความอ่อนไหว</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยเราจะเก็บรวบรวม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เปิดเผย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >หรือถ่ายโอนข้ามแดนซึ่งข้อมูลอ่อนไหวหากเราได้รับการยินยอมอย่างเปิดเผยจากคุณหรือตามที่กฎหมายอนุญาต</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >ข้อมูลส่วนบุคคลดังต่อไปนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >แบ่งประเภทตามลักษณะธุรกิจที่หลากหลายของกลุ่มวันแบงค็อก</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1.1.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >อาคารพาณิชย์</span
                      ></u
                    ></strong
                  >
                </p>
                <ol
                  type="1"
                  class="awlist1"
                  style="margin:0pt; padding-left:0pt;"
                >
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดส่วนบุคคล</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >คำนำหน้า</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ชื่อ</span
                    ><span style="font-weight:normal;">-</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >นามสกุล</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เพศ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >อายุ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >สัญชาติ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันเดือนปีเกิด</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ตำแหน่งงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >สถานที่ทำงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ประวัติการทำงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลบนบัตรที่ราชการออกให้</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันที่ออกบัตรและวันหมดอายุ</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขประจำตัวประชาชน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขหนังสือเดินทาง</span
                    ><span style="font-weight:normal;">),&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลในทะเบียนบ้าน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ใบอนุญาตทำงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เลขทะเบียนรถยนต์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รูปถ่าย</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >งานอดิเรกหรือความสนใจของคุณ</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดการติดต่อ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ที่อยู่ทางไปรษณีย์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขโทรศัพท์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลตำแหน่งที่ตั้ง</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ที่อยู่อีเมล</span
                    ><span style="font-weight:normal;"
                      >, LINE ID, WhatsApp ID, WeChat ID,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >บัญชี</span
                    ><span style="font-weight:normal;">&nbsp;Facebook</span>
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดทางการเงิน</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายได้</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เงินเดือน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดบัญชีธนาคาร</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เลขที่บัญชีธนาคาร</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ชื่อธนาคาร</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >สาขา</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ประเภทบัญชี</span
                    ><span style="font-weight:normal;">)&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และข้อมูลที่เกี่ยวข้องกับด้านการเงินอื่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ๆ</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหว</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลอ่อนไหวดังแสดงในเอกสารระบุตัวตนต่าง</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ๆ</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ศาสนา</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เชื้อชาติ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือชาติกำเนิด</span
                    ><span style="font-weight:normal;">)&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลสุขภาพ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลชีวมิติ</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ลายนิ้วมือ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >การจดจำใบหน้า</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >การสแกนม่านตา</span
                    ><span style="font-weight:normal;">)&nbsp;</span>
                  </li>
                </ol>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1.2.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >ห้างสรรพสินค้า</span
                      ></u
                    ></strong
                  >
                </p>
                <ol
                  type="1"
                  class="awlist2"
                  style="margin:0pt; padding-left:0pt;"
                >
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดส่วนบุคคล</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >คำนำหน้า</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ชื่อ</span
                    ><span style="font-weight:normal;">-</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >นามสกุล</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เพศ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >อายุ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >สัญชาติ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันเดือนปีเกิด</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ตำแหน่งงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >สถานที่ทำงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ประวัติการทำงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลบนบัตรที่ราชการออกให้</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันที่ออกบัตรและวันหมดอายุ</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขประจำตัวประชาชน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขหนังสือเดินทาง</span
                    ><span style="font-weight:normal;">),&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลในทะเบียนบ้าน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ใบอนุญาตทำงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เลขทะเบียนรถยนต์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รูปถ่าย</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดการติดต่อ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ที่อยู่ทางไปรษณีย์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขโทรศัพท์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลตำแหน่งที่ตั้ง</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ที่อยู่อีเมล</span
                    ><span style="font-weight:normal;"
                      >, LINE ID, WhatsApp ID, WeChat ID,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >บัญชี</span
                    ><span style="font-weight:normal;"
                      >&nbsp;Facebook,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รหัสคิวอาร์</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดทางการเงิน</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายได้</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เงินเดือน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดบัญชีธนาคาร</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เลขที่บัญชีธนาคาร</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ชื่อธนาคาร</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >สาขา</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ประเภทบัญชี</span
                    ><span style="font-weight:normal;">)&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และข้อมูลที่เกี่ยวข้องกับด้านการเงินอื่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ๆ</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดการทำธุรกรรม</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดเกี่ยวกับการชำระเงินและรับชำระเงินของคุณ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันและ</span
                    ><span style="font-weight:normal;">/</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือเวลาการชำระเงิน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >จำนวนเงินและวิธีการชำระเงิน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดเกี่ยวกับธุรกรรมการไถ่ถอน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันและสถานที่ที่ทำการซื้อ</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดด้านเทคนิค</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขไอพี</span
                    ><span style="font-weight:normal;">&nbsp;(IP),&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลข</span
                    ><span style="font-weight:normal;">&nbsp;Mac</span>
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดพฤติกรรม</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลเกี่ยวกับพฤติกรรมของคุณ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ไลฟ์สไตล์</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >งานอดิเรก</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ความสนใจ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ทัศนคติ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และความเชื่อ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รวมถึงข้อมูลการปฏิสัมพันธ์</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดโปรไฟล์</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขสมาชิกแอปพลิเคชัน</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลของบุคคลอื่น</span
                    >:<span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ชื่อบิดา</span
                    ><span style="font-weight:normal;">-</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >มารดา</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหว</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลอ่อนไหวดังแสดงในเอกสารระบุตัวตนต่าง</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ๆ</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ศาสนา</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เชื้อชาติ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือชาติกำเนิด</span
                    ><span style="font-weight:normal;">)&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลสุขภาพ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ความพิการ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และข้อมูลชีวมิติ</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ลายนิ้วมือ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >การจดจำใบหน้า</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >การสแกนม่านตา</span
                    ><span style="font-weight:normal;">),&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ประวัติอาชญากรรม</span
                    >
                  </li>
                </ol>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1.3.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >พื้นที่ใช้สอยสำหรับทำงานร่วมกัน</span
                      ></u
                    ></strong
                  >
                </p>
                <ol
                  type="1"
                  class="awlist3"
                  style="margin:0pt; padding-left:0pt;"
                >
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดส่วนบุคคล</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >คำนำหน้า</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ชื่อ</span
                    ><span style="font-weight:normal;">-</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >นามสกุล</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เพศ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >อายุ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >สัญชาติ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันเดือนปีเกิด</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ตำแหน่งงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >สถานที่ทำงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ประวัติการทำงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ประวัติการศึกษา</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ภาษาที่ชอบใช้</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลบนบัตรที่ราชการออกให้</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขประจำตัวประชาชนและวันหมดอายุของบัตร</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขหนังสือเดินทาง</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดใบอนุญาตขับขี่</span
                    ><span style="font-weight:normal;">),&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขประจำตัวนักศึกษาและวันหมดอายุของบัตร</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลในทะเบียนบ้าน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รูปถ่าย</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ภาพถ่ายวิดีโอ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >บันทึกเสียง</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลที่ตั้งทางภูมิศาสตร์</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดการติดต่อ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ที่อยู่ทางไปรษณีย์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ที่อยู่สำหรับวางบิล</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขโทรศัพท์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ที่อยู่อีเมล</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >บัญชีโซเชียลมีเดียต่าง</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ๆ</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดทางการเงิน</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายได้</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดบัญชีธนาคาร</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดการชำระเงิน</span
                    ><span style="font-weight:normal;">,</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดบัตรเครดิต</span
                    ><span style="font-weight:normal;">/</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เดบิต</span
                    ><span style="font-weight:normal;">&nbsp;</span>
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดพฤติกรรม</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลเกี่ยวกับพฤติกรรมของคุณ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ไลฟ์สไตล์</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ทัศนคติ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ความเชื่อ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รวมถึงข้อมูลการปฏิสัมพันธ์</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดโปรไฟล์</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขประจำตัวบัตรการเข้าใช้งาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ชื่อผู้ใช้</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ชื่อที่ใช้แสดงบนโปรไฟล์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รหัสผ่าน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายการที่ผู้ใช้ชื่นชอบ</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหว</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลอ่อนไหวดังแสดงในเอกสารระบุตัวตนต่าง</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ๆ</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ศาสนา</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เชื้อชาติ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือชาติกำเนิด</span
                    ><span style="font-weight:normal;">)&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลสุขภาพ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ความพิการ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และข้อมูลชีวมิติ</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ลายนิ้วมือ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >การจดจำใบหน้า</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >การสแกนม่านตา</span
                    ><span style="font-weight:normal;">)</span>
                  </li>
                </ol>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1.4.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >ค้าปลีก</span
                      ></u
                    ></strong
                  >
                </p>
                <ol
                  type="1"
                  class="awlist4"
                  style="margin:0pt; padding-left:0pt;"
                >
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดส่วนบุคคล</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >คำนำหน้า</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ชื่อ</span
                    ><span style="font-weight:normal;">-</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >นามสกุล</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เพศ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >อายุ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >สัญชาติ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันเดือนปีเกิด</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ตำแหน่งงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >สถานที่ทำงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ประวัติการทำงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลบนบัตรที่ราชการออกให้</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขประจำตัวประชาชน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขหนังสือเดินทาง</span
                    ><span style="font-weight:normal;">),&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลเกี่ยวกับทะเบียนบ้าน</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดการติดต่อ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ที่อยู่ทางไปรษณีย์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขโทรศัพท์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลตำแหน่งที่ตั้ง</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ที่อยู่อีเมล</span
                    ><span style="font-weight:normal;">, LINE ID</span>
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดทางการเงิน</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายได้</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เงินเดือน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดบัญชีธนาคาร</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดการชำระเงิน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดบัตรเครดิต</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และข้อมูลที่เกี่ยวข้องกับด้านการเงินอื่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ๆ</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดการทำธุรกรรม</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดเกี่ยวกับการชำระเงินและรับชำระเงินของคุณ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันและ</span
                    ><span style="font-weight:normal;">/</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือเวลาการชำระเงิน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >จำนวนเงินและวิธีการชำระเงิน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดเกี่ยวกับธุรกรรมการไถ่ถอน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันและสถานที่ที่ทำการซื้อ</span
                    >
                  </li>
                </ol>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <ol
                  start="5"
                  type="1"
                  class="awlist5"
                  style="margin:0pt; padding-left:0pt;"
                >
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดพฤติกรรม</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลเกี่ยวกับพฤติกรรมของคุณ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ไลฟ์สไตล์</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ทัศนคติ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ความเชื่อ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รวมถึงข้อมูลการปฏิสัมพันธ์</span
                    ><span style="font-weight:normal;">&nbsp;</span>
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหว</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลอ่อนไหวดังแสดงในเอกสารระบุตัวตนต่าง</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ๆ</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ศาสนา</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เชื้อชาติ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือชาติกำเนิด</span
                    ><span style="font-weight:normal;">)&nbsp;</span>
                  </li>
                </ol>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1.5.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >ซอฟแวร์แอฟพลิเคชัน</span
                      ></u
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <ol
                  type="1"
                  class="awlist6"
                  style="margin:0pt; padding-left:0pt;"
                >
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดส่วนบุคคล</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >คำนำหน้า</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ชื่อ</span
                    ><span style="font-weight:normal;">-</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >นามสกุล</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เพศ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >อายุ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >สัญชาติ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันเดือนปีเกิด</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ตำแหน่งงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >สถานที่ทำงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ประวัติการทำงาน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลบนบัตรที่ราชการออกให้</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขประจำตัวประชาชน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขหนังสือเดินทาง</span
                    ><span style="font-weight:normal;">),&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลเกี่ยวกับทะเบียนบ้าน</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดการติดต่อ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ที่อยู่ทางไปรษณีย์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หมายเลขโทรศัพท์</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลตำแหน่งที่ตั้ง</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ที่อยู่อีเมล</span
                    ><span style="font-weight:normal;">, LINE ID</span>
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดทางการเงิน</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายได้</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เงินเดือน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดบัญชีธนาคาร</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดการชำระเงิน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดบัตรเครดิต</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และข้อมูลที่เกี่ยวข้องกับด้านการเงินอื่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ๆ</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดการทำธุรกรรม</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดเกี่ยวกับการชำระเงินและรับชำระเงินของคุณ</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันและ</span
                    ><span style="font-weight:normal;">/</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือเวลาการชำระเงิน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >จำนวนเงินและวิธีการชำระเงิน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รายละเอียดเกี่ยวกับธุรกรรมการไถ่ถอน</span
                    ><span style="font-weight:normal;">,&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >วันและสถานที่ที่ทำการซื้อ</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดพฤติกรรม</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลเกี่ยวกับพฤติกรรมของคุณ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ไลฟ์สไตล์</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ทัศนคติ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ความเชื่อ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รวมถึงข้อมูลการปฏิสัมพันธ์</span
                    ><span style="font-weight:normal;">&nbsp;</span>
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหว</span
                    >
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อมูลอ่อนไหวดังแสดงในเอกสารระบุตัวตนต่าง</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ๆ</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ศาสนา</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เชื้อชาติ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือชาติกำเนิด</span
                    ><span style="font-weight:normal;">)&nbsp;</span>
                  </li>
                </ol>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'Angsana New'; font-size:14pt;"
                    >นอกจากนี้</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เราอาจเก็บรวบรวมข้อมูลอื่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;(</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ถ้ามี</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >)&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >คุกกี้และพฤติกรรมการเรียกดูเนื้อหาบนอินเทอร์เน็ต</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข้อมูลการเข้าสู่ระบบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ประเภทการเรียกดู</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ประวัติการสืบค้น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ภาษาที่ใช้ในการเรียกดู</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หมายเลยไอพี</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;(</span
                  ><span style="font-family:'DB Ozone X';">IP</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >)</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข้อมูลเกี่ยวกับวิธีการที่คุณใช้และโต้ตอบกับบริการออนไลน์ของเราหรือการโฆษณา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;(</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ซึ่งรวมถึงหน้าเว็บที่เข้าชม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เนื้อหาที่รับชม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ลิงค์ที่มีการคลิกดู</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และคุณสมบัติต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ที่ใช้งาน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >)&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เวลาและความถี่ที่คุณใช้บริการออนไลน์ของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หน้าเว็บที่คุณคลิกลิงค์เพื่อมายังบริการออนไลน์ของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;(</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'DB Ozone X';">URL&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ตัวอ้างอิง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >)&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และรายงานระบบขัดข้อง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >โดยหากเป็นไปได้ที่จะต้องนำข้อมูลใด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >มาผนวกรวมกับข้อมูลส่วนบุคคลของคุณ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หรือหากข้อมูลอื่นถูกนำไปใช้เพื่อสร้างโปรไฟล์ของบุคคลหนึ่ง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เราจะถือว่าข้อมูลอื่นนั้น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >รวมถึงข้อมูลที่ถูกนำไปผนวกรวมด้วยนั้นเป็นข้อมูลส่วนบุคคล</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >อย่างไรก็ตาม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >คุณสามารถปฏิเสธหรือลบทิ้งคุกกี้ได้ทุกเมื่อในการตั้งค่าความเป็นส่วนตัวของเว็บบราวเซอร์ของคุณ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >คุณสามารถเลือกปฏิเสธคุกกี้บางส่วนหรือทั้งหมดได้</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หากคุณใช้งานเว็บไซต์โดยไม่มีการปฏิเสธหรือลบทิ้ง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ถือว่าคุณได้ตกลงยินยอมให้เราใช้งานและจัดเก็บคุกกี้บนอุปกรณ์ของคุณ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >คุณสามารถตรวจสอบนโยบายคุ๊กกี้ได้ที่นี่</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'Angsana New'; font-size:14pt;"
                    >หากคุณได้ให้ข้อมูลส่วนบุคคลของบุคคลอื่นแก่เรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ชื่อ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >นามสกุล</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >รายละเอียดที่อยู่</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และหมายเลขโทรศัพท์สำหรับติดต่อกรณีฉุกเฉิน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >รายได้ของสมาชิกครอบครัวของบุคคลเหล่านั้น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ขอให้คุณแสดงนโยบายความเป็นส่วนตัวฉบับนี้เพื่อให้บุคคลเหล่านั้นรับทราบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >/</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หรือขอรับความยินยอม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ตามที่ปฏิบัติได้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'Angsana New'; font-size:14pt;"
                    >เราจะเก็บรวบรวม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ใช้</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หรือเปิดเผยข้อมูลอ่อนไหวโดยอาศัยความยินยอมโดยชัดแจ้งจากคุณหรือเมื่อกฎหมายอนุญาตเท่านั้น</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'Angsana New'; font-size:14pt;"
                    >เราเก็บรวบรวมข้อมูลของผู้เยาว์</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >บุคคลเสมือนไร้ความสามารถ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และบุคคลไร้ความสามารถก็ต่อเมื่อบิดามารดาหรือผู้ปกครองได้ให้ความยินยอมแล้วเท่านั้น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เราจะไม่เก็บรวมรวมข้อมูลโดยมีสติสัมปชัญญะจากลูกค้าที่มีอายุต่ำกว่า</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;20&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ปีโดยไม่ได้รับความยินยอมเมื่อจำเป็นจากบิดามารดา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หรือจากบุคคลเสมือนไร้ความสามารถ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และบุคคลไร้ความสามารถโดยมิได้รับความยินยอมจากผู้ปกครองตามกฎหมาย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ในกรณีที่เราทราบว่าเราได้ทำการเก็บรวบรวมข้อมูลข้อมูลส่วนบุคคลโดยมิได้ตั้งใจจากผู้ใดก็ตามที่มีอายุต่ำกว่า</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;20&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ปีโดยไม่ได้รับความยินยอมเมื่อจำเป็นจากบิดามารดา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หรือจากบุคคลเสมือนไร้ความสามารถ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และบุคคลไร้ความสามารถโดยมิได้รับความยินยอมจากผู้ปกครองตามกฎหมาย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เราจะลบข้อมูลนั้นนั้นโดยทันทีหรือดำเนินการกับข้อมูลนั้นก็ต่อเมื่อเราสามารถอาศัยมูลฐานทางกฎหมายอื่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >นอกเหนือจากความยินยอมได้เท่านั้น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;&nbsp;</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';">2.</span></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; font-size:11pt;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >วัตถุประสงค์ในการเก็บรวบรวม</span
                      ></u
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'DB Ozone X';">&nbsp;</span></u
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';">ใช้</span></u
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'DB Ozone X';">&nbsp;</span></u
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >หรือเปิดเผยข้อมูลส่วนบุคคล</span
                      ></u
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; font-size:11pt;"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'Angsana New'; font-size:14pt;"
                    >เราอาจเก็บรวบรวม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ใช้</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เปิดเผย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >/</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หรือถ่ายโอนข้ามแดนซึ่งข้อมูลส่วนบุคคลและข้อมูลอ่อนไหวของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2.1.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >วัตถุประสงค์ที่จำเป็นต้องได้รับความยินยอม</span
                      ></u
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'Angsana New'; font-size:14pt;"
                    >เราอาศัยความยินยอมของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</span
                  ><span style="font-family:'DB Ozone X';">:</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2.1.1.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >อาคารพาณิชย์</span
                      ></u
                    ></strong
                  >
                </p>
                <ol
                  type="1"
                  class="awlist7"
                  style="margin:0pt; padding-left:0pt;"
                >
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การตลาดและประชาสัมพันธ์</span
                    ><span
                      style="width:16.91pt; text-indent:0pt; font-weight:normal; display:inline-block;"
                      >&nbsp;</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เพื่อแจ้งการสื่อสารการตลาด</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >การขาย</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข้อเสนอพิเศษ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >โปรโมชั่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ประกาศ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข่าวสาร</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และข้อมูลเกี่ยวกับสินค้าและบริการต่าง</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ๆ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >จากกลุ่มวันแบงค็อกของเรา</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >รวมถึงบริษัทในเครือ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >บริษัทย่อย</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >บุคคลภายนอก</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และ</span
                    ><span style="font-weight:normal;">/</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือหุ้นส่วนทางธุรกิจ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ซึ่งเราไม่สามารถพึ่งพามูลฐานทางกฎหมายอื่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ๆ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ได้</span
                    >
                  </li>
                </ol>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="width:1.83pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >บริการด้านการวิเคราะห์</span
                    ></strong
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อดำเนินการให้บริการวิเคราะห์ข้อมูลเกี่ยวกับข้อมูลส่วนบุคคลของคุณภายในกลุ่มวันแบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือบุคคลภายนอก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >3)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="width:1.83pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหว</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';"
                    >เราอาจใช้ข้อมูลอ่อนไหวของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</span
                  >
                </p>
                <ul type="disc" style="margin:0pt; padding-left:0pt;">
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหวดังแสดงในเอกสารระบุตัวตน</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                    ><span style="font-family:'Angsana New';">เช่น</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">ศาสนา</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">เชื้อชาติ</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >หรือชาติกำเนิด</span
                    ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อวัตถุประสงค์ในการยืนยันตัวตนและการพิสูจน์ตัวบุคคล</span
                    >
                  </li>
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';"
                      >ข้อมูลสุขภาพและความพิการเพื่อประสานงานกับผู้ให้บริการสุขภาพ</span
                    >
                  </li>
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';">ข้อมูลชีวมิติ</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                    ><span style="font-family:'Angsana New';">เช่น</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">ลายนิ้วมือ</span
                    ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การจดจำใบหน้า</span
                    ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การสแกนม่านตา</span
                    ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อการเข้าถึงสถานประกอบการของเรา</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อวัตถุประสงค์ด้านความปลอดภัย</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >และการจัดให้มีระบบควบคุมการเข้าใช้ลิฟต์</span
                    >
                  </li>
                </ul>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2.1.2.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >ห้างสรรพสินค้า</span
                      ></u
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="width:1.83pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การตลาดและประชาสัมพันธ์</span
                    ></strong
                  ><span
                    style="width:34.91pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                    >&nbsp;</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อแจ้งการสื่อสารการตลาด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การขาย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">โปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ประกาศ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข่าวสาร</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และข้อมูลเกี่ยวกับสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >จากกลุ่มวันแบงค็อกของเรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >รวมถึงบริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บุคคลภายนอก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >หรือหุ้นส่วนทางธุรกิจ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งเราไม่สามารถพึ่งพามูลฐานทางกฎหมายอื่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ได้</span>
                </p>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="width:1.83pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >บริการด้านการวิเคราะห์</span
                    ></strong
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อดำเนินการให้บริการวิเคราะห์ข้อมูลเกี่ยวกับข้อมูลส่วนบุคคลของคุณภายในกลุ่มวันแบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือบุคคลภายนอก</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >3)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="width:1.83pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหว</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';"
                    >เราอาจใช้ข้อมูลอ่อนไหวของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</span
                  >
                </p>
                <ul type="disc" style="margin:0pt; padding-left:0pt;">
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหวดังแสดงในเอกสารระบุตัวตน</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                    ><span style="font-family:'Angsana New';">เช่น</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">ศาสนา</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">เชื้อชาติ</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >หรือชาติกำเนิด</span
                    ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อวัตถุประสงค์ในการยืนยันตัวตนและการพิสูจน์ตัวบุคคล</span
                    >
                  </li>
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';">ข้อมูลชีวมิติ</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                    ><span style="font-family:'Angsana New';">เช่น</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">ลายนิ้วมือ</span
                    ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การจดจำใบหน้า</span
                    ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การสแกนม่านตา</span
                    ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อเข้าสถานประกอบการและเพื่อวัตถุประสงค์ด้านความปลอดภัย</span
                    >
                  </li>
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';"
                      >ข้อมูลสุขภาพและความพิการเพื่อประสานงานกับผู้ให้บริการสุขภาพ</span
                    >
                  </li>
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';"
                      >ประวัติอาชญากรรม</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อวัตถุประสงค์ด้านความปลอดภัย</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                  </li>
                </ul>
                <p
                  style="margin-top:0pt; margin-left:54pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2.1.3.</span
                    ></strong
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >พื้นที่ใช้สอยสำหรับทำงานร่วมกัน</span
                      ></u
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="width:1.83pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การตลาดและประชาสัมพันธ์</span
                    ></strong
                  ><span
                    style="width:34.91pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                    >&nbsp;</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อแจ้งการสื่อสารการตลาด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การขาย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">โปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ประกาศ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข่าวสาร</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และข้อมูลเกี่ยวกับสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >จากกลุ่มวันแบงค็อกของเรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >รวมถึงบริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บุคคลภายนอก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >หรือหุ้นส่วนทางธุรกิจ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งเราไม่สามารถพึ่งพามูลฐานทางกฎหมายอื่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ได้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';">หรือ</span>
                </p>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="width:1.83pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหว</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';"
                    >เราอาจใช้ข้อมูลอ่อนไหวของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</span
                  >
                </p>
                <ul type="disc" style="margin:0pt; padding-left:0pt;">
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหวดังแสดงในเอกสารระบุตัวตน</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                    ><span style="font-family:'Angsana New';">เช่น</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">ศาสนา</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">เชื้อชาติ</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >หรือชาติกำเนิด</span
                    ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อวัตถุประสงค์ในการยืนยันตัวตนและการพิสูจน์ตัวบุคคล</span
                    >
                  </li>
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';">ข้อมูลชีวมิติ</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                    ><span style="font-family:'Angsana New';">เช่น</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">ลายนิ้วมือ</span
                    ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การจดจำใบหน้า</span
                    ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การสแกนม่านตา</span
                    ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อเข้าสถานประกอบการและเพื่อวัตถุประสงค์ด้านความปลอดภัย</span
                    >
                  </li>
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';"
                      >ข้อมูลสุขภาพและความพิการเพื่อประสานงานกับผู้ให้บริการสุขภาพ</span
                    >
                  </li>
                </ul>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2.1.4.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >ห้างค้าปลีก</span
                      ></u
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="width:1.83pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การตลาดและประชาสัมพันธ์</span
                    ></strong
                  ><span
                    style="width:34.91pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                    >&nbsp;</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อแจ้งการสื่อสารการตลาด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การขาย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">โปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ประกาศ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข่าวสาร</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">กิจกรรม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และข้อมูลเกี่ยวกับสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >จากกลุ่มวันแบงค็อกของเรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >รวมถึงบริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บุคคลภายนอก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >หรือหุ้นส่วนทางธุรกิจ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งเราไม่สามารถพึ่งพามูลฐานทางกฎหมายอื่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ได้</span>
                </p>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="width:1.83pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >บริการด้านการวิเคราะห์</span
                    ></strong
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อดำเนินการให้บริการวิเคราะห์ข้อมูลเกี่ยวกับข้อมูลส่วนบุคคลของคุณภายในกลุ่มวันแบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือบุคคลภายนอก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';">หรือ</span>
                </p>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >3)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="width:1.83pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหว</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';"
                    >เราอาจใช้ข้อมูลอ่อนไหวของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</span
                  >
                </p>
                <ul type="disc" style="margin:0pt; padding-left:0pt;">
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหวดังแสดงในเอกสารระบุตัวตน</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                    ><span style="font-family:'Angsana New';">เช่น</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">ศาสนา</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">เชื้อชาติ</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >หรือชาติกำเนิด</span
                    ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อวัตถุประสงค์ในการยืนยันตัวตนและการพิสูจน์ตัวบุคคล</span
                    >
                  </li>
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';">ข้อมูลชีวมิติ</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                    ><span style="font-family:'Angsana New';">เช่น</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">ลายนิ้วมือ</span
                    ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การจดจำใบหน้า</span
                    ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การสแกนม่านตา</span
                    ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อเข้าสถานประกอบการและเพื่อวัตถุประสงค์ด้านความปลอดภัย</span
                    >
                  </li>
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';"
                      >ข้อมูลสุขภาพและความพิการเพื่อประสานงานกับผู้ให้บริการสุขภาพ</span
                    >
                  </li>
                </ul>
                <p
                  style="margin-top:0pt; margin-left:54pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-left:54pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-left:54pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-left:54pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-left:54pt; margin-bottom:0pt; line-height:normal;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2.1.5.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >ซอฟแวร์แอฟพลิเคชัน</span
                      ></u
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'DB Ozone X';">&nbsp;</span></u
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';">1)</span></strong
                  ><strong
                    ><span
                      style="width:5.55pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การตลาดและประชาสัมพันธ์</span
                    ></strong
                  ><span
                    style="width:34.91pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                    >&nbsp;</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อแจ้งการสื่อสารการตลาด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การขาย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">โปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ประกาศ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข่าวสาร</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">กิจกรรม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และข้อมูลเกี่ยวกับสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >จากกลุ่มวันแบงค็อกของเรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >รวมถึงบริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บุคคลภายนอก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >หรือหุ้นส่วนทางธุรกิจ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งเราไม่สามารถพึ่งพามูลฐานทางกฎหมายอื่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ได้</span>
                </p>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="width:1.83pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >บริการด้านการวิเคราะห์</span
                    ></strong
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อดำเนินการให้บริการวิเคราะห์ข้อมูลเกี่ยวกับข้อมูลส่วนบุคคลของคุณให้กับบุคคลภายนอก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';">หรือ</span>
                </p>
                <p
                  style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-indent:-18pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >3)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="width:1.83pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลอ่อนไหว</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';"
                    >เราอาจใช้ข้อมูลอ่อนไหวของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</span
                  >
                </p>
                <ul type="disc" style="margin:0pt; padding-left:0pt;">
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';">การจดจำใบหน้า</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อวัตถุประสงค์ในการยืนยันตัวตนและการพิสูจน์ตัวบุคคล</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >และเพื่อวัตถุประสงค์ด้านความปลอดภัย</span
                    >
                  </li>
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';">ข้อมูลชีวมิติ</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                    ><span style="font-family:'Angsana New';">เช่น</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">ลายนิ้วมือ</span
                    ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การจดจำใบหน้า</span
                    ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การสแกนม่านตา</span
                    ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อเข้าสถานประกอบการและเพื่อวัตถุประสงค์ด้านความปลอดภัย</span
                    >
                  </li>
                  <li
                    style="margin-left:47.44pt; line-height:normal; padding-left:6.56pt; font-family:serif; font-size:14pt;"
                  >
                    <span style="font-family:'Angsana New';"
                      >ข้อมูลสุขภาพและความพิการเพื่อประสานงานกับผู้ให้บริการสุขภาพ</span
                    >
                  </li>
                </ul>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >เมื่อความยินยอมเป็นมูลฐานทางกฎหมาย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >คุณมีสิทธิ์เพิกถอนความยินยอมได้ทุกเมื่อ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งสามารถกระทำการดังกล่าวได้โดยติดต่อ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราตามข้อมูลการติดต่อด้านล่างนี้</span
                  ><span style="font-family:'DB Ozone X'; font-size:11pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การเพิกถอนความยินยอมจะไม่ส่งผลต่อความถูกต้องตามกฎหมายของการเก็บรวบรวม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และเปิดเผยข้อมูลส่วนบุคคลและข้อมูลอ่อนไหวของคุณตามความยินยอมของคุณก่อนที่จะมีการเพิกถอน</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-left:54pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';">2.2.</span></strong
                  ><strong
                    ><span
                      style="width:12.65pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >วัตถุประสงค์ที่เราอาจพึ่งพาและมูลฐานทางกฎหมายอื่นสำหรับประมวลผลข้อมูลส่วนบุคคลของคุณ</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';">เราอาจอาศัย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(1)&nbsp;</span
                  ><span style="font-family:'Angsana New';">ฐานทางสัญญา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;-&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อการเริ่มต้นทำสัญญาและการปฏิบัติตามสัญญากับคุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(2)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ฐานหน้าที่ตามกฎหมาย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;-&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อการปฏิบัติตามพันธะผูกพันทางกฎหมาย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(3)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ฐานประโยชน์อันชอบธรรม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;-&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อวัตถุประสงค์เกี่ยวกับประโยชน์อันชอบธรรมของเราและผลประโยชน์อันชอบธรรมของบุคคลที่สาม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(4)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ฐานประโยชน์อันสำคัญต่อชีวิต</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;&ndash;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อป้องกันหรือยับยั้งอันตรายต่อชีวิต</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ร่างกาย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือสุขภาพของบุคคลหนึ่ง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';">หรือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(5)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ฐานสาธารณประโยชน์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;-</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อประสิทธิภาพการดำเนินงานเพื่อสาธารณประโยชน์หรือเพื่อการปฏิบัติหน้าที่ราชการ</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2.2.1.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >อาคารพาณิชย์</span
                      ></u
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >เราอาจเก็บรวบรวม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >1)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >เพื่อจัดหาสินค้าและบริการให้แก่คุณ</span
                    ></strong
                  ><strong
                    ><span
                      style="width:15.57pt; text-indent:0pt; font-family:'DB Ozone X'; font-size:14pt; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อเข้าทำสัญญาและจัดการความสัมพันธ์เชิงสัญญากับคุณ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อจัดทำรายละเอียดเกี่ยวกับสัญญา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ธุรกรรมทางการเงินและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ที่เกี่ยวข้องกับการชำระเงิน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การตรวจสอบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การทวนสอบยืนยัน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การยกเลิกธุรกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อทำการนัดหมายเพื่อเยี่ยมชมห้องตัวอย่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการออกใบเสร็จรับเงินและใบแจ้งหนี้</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การเบิกจ่ายเงินสด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เจ้าหนี้การค้า</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หลักฐานการซื้อขาย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อเก็บบันทึกหลักฐาน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อจัดการดูแลการใช้งานบัตรเข้าออก</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และเพื่อส่งคำเชิญให้คุณเข้าร่วมงานกิจกรรมและบริการของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อจัดงานกิจกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สถานที่</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และบริการอื่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ให้แก่คุณ</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >2)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >การตลาดและประชาสัมพันธ์</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อแจ้งการสื่อสารการตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สิทธิพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >โปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ประกาศ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข่าวสาร</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >กิจกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข้อมูลเกี่ยวกับสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >จากกลุ่มวันแบงค็อกของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >รวมถึงบริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >/</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หรือหุ้นส่วนทางธุรกิจตามความชอบของคุณที่ได้แจ้งไว้ทั้งโดยตรงหรือโดยอ้อม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >3)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >การจับรางวัล</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >การประกวดแข่งขัน</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >และข้อเสนอ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >/</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >โปรโมชั่นอื่น</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >ๆ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >เพื่อให้คุณได้มีส่วนร่วมในโปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >การประกวดแข่งขัน</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >การจับรางวัล</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >สิทธิพิเศษในการใช้พื้นที่สุดพิเศษเฉพาะคุณ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >และข้อเสนอ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >/</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >โปรโมชั่นอื่น</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >ๆ</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >4)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การลงทะเบียนและการพิสูจน์ตัวบุคคล</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';">เพื่อลงทะเบียน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ยืนยัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ระบุตัวตน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และพิสูจน์ตัวตนหรืออัตลักษณ์บุคคลของคุณ</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >5)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การสื่อสารและบริหารจัดการความสัมพันธ์ของเรากับคุณ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';"
                    >เพื่อสื่อสารกับคุณเกี่ยวกับสินค้าและบริการที่คุณได้รับจากเรารวมทั้งรับข้อมูลเกี่ยวกับสินค้าและบริการจากคุณ</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อดำเนินการและปรับปรุงข้อมูลของคุณให้เป็นปัจจุบัน</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่ออำนวยความสะดวกในการใช้สินค้าและบริการแก่คุณ</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อจัดการรับมือข้อสงสัยเกี่ยวกับการบริการลูกค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">คำร้องขอ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">คำติชม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อร้องเรียน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การเรียกร้องสิทธิ์การรับประกัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อพิพาท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือการชดเชยค่าสินไหมทดแทน</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อจัดการกับปัญหาทางเทคนิคและข้อตกลงการค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >6)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การทำธุรกรรมและ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';">/</span></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >หรือการชำระเงิน</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';">เช่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การดำเนินการชำระเงินหรือธุรกรรมต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การวางบิล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การดำเนินการ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การหักบัญชี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การคืนเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือกิจกรรมการไกล่เกลี่ย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งรวมถึงธุรกรรมทางการเงินทั้งหมดหรือการชำระเงินที่เกี่ยวข้องกับการเก็บรักษาบันทึก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การออกหนังสือเรียกชำระเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใบกำกับภาษี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใบเสร็จรับเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และการจัดส่งเอกสารดังกล่าว</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >7)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >การศึกษาและวิเคราะห์ข้อมูล</span
                    ></strong
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลเพื่อการพัฒนาสินค้าและบริการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การวิจัยตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การสำรวจตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การประเมินผลตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และพฤติกรรมการตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลเพื่อปรับปรุงประสิทธิภาพทางการตลาดและข้อเสนอการขายสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;&nbsp;</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อประเมินประโยชน์ที่คุณได้รับจากโซลูชั่นต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับใช้ในการปรับปรุงระบบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;(</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >พัฒนาต้นแบบโดยแบ่งประเภทตามกลุ่มลูกค้าเพื่อการให้บริการที่ดียิ่งขึ้น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >);&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับใช้ในการเพิ่มโอกาสทางธุรกิจ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อประเมินผล</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >พัฒนา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >จัดการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ปรับปรุง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ค้นคว้าวิจัย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และพัฒนาบริการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สินค้า</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ระบบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และการดำเนินธุรกิจสำหรับคุณและลูกค้าของเราทุกคน</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >8)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การดำเนินธุรกิจ</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปรับปรุงข้อมูลลูกค้าให้เป็นปัจจุบัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อรักษาความถูกต้องของข้อมูล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับป้องกันความเสี่ยง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;(</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >พัฒนาต้นแบบเพื่อคาดการณ์ความเป็นไปได้ของการเกิดหนี้ที่ไม่ก่อให้เกิดรายได้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคาดการณ์โอกาสการเกิดอุบัติเหตุ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >);&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการประเมินความเสี่ยงของลูกค้า</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการควบคุมความเสี่ยงสถาบัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การตรวจสอบบัญชีและการเก็บรักษาบันทึกการตรวจสอบบัญชี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การวิเคราะห์ความเสี่ยงด้านสินเชื่อ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดเก็บบันทึกทางธุรกิจรวมทั้งดำเนินการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >จัดการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และคงไว้ซึ่งการดำเนินธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อรักษาการปฏิบัติงานด้านไอที</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการระบบสื่อสาร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การดำเนินงานด้านความปลอดภัยของระบบไอทีและการตรวจสอบความปลอดภัยของระบบไอที</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อดำรงไว้ซึ่งการบริหารจัดการธุรกิจภายในสำหรับการปฏิบัติตามข้อกำหนด</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >นโยบาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และกระบวนการขั้นตอนภายในองค์กร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อเก็บรักษาบันทึกความถี่การเข้าชม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >9)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การปฏิบัติตามระเบียบบังคับและข้อผูกพัน</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปฏิบัติตามข้อผูกพันทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >กระบวนการทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคำสั่งจากหน่วยงานของรัฐ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ซึ่งอาจรวมถึงคำสั่งจากหน่วยงานของรัฐในต่างประเทศนอกเหนือจากประเทศไทย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >/</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือให้ความร่วมมือกับศาล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานกำกับดูแล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานของรัฐ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และหน่วยงานบังคับใช้กฎหมายเมื่อมีเหตุอันเชื่อได้ว่าเราจำเป็นต้องกระทำการเช่นนั้นตามกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเมื่อการเปิดเผยซึ่งข้อมูลส่วนบุคคลของคุณมีความจำเป็นอย่างยิ่งเพื่อเป็นการปฏิบัติตามข้อผูกพันทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >กระบวนการทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคำสั่งจากหน่วยงานของรัฐดังกล่าว</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดทำและจัดการแจ้งภาษี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อติดต่อหน่วยงานที่เกี่ยวข้องด้านภาษี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานกำกับดูแลการบริการด้านการเงิน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และหน่วยงานที่กำกับดูและหน่วยงานของรัฐอื่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อการสอบสวนหรือป้องกันอาชญากรรม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >10)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การทำงานของเว็บไซต์และแพลตฟอร์มของเรา</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดูแล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ดำเนินการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ติดตาม</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ตรวจสอบ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และจัดการเกี่ยวกับเว็บไซต์และแพลตฟอร์มของเราเพื่ออำนวยความสะดวกและให้แน่ใจว่าเว็บไซต์และแพลตฟอร์มของเราทำงานได้อย่างเหมาะสม</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >มีประสิทธิภาพ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และปลอดภัย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อให้คุณได้รับประสบการณ์ที่สะดวกสบายในการใช้งานเว็บไซต์และแพลตฟอร์มของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปรับปรุงรูปแบบการจัดวางและเนื้อหาของเว็บไซต์และแพลตฟอร์มของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อให้คุณสามารถเข้าถึงระบบที่เรามีให้บริการและเพื่อให้ความช่วยเหลือทางเทคนิค</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >11)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การปกป้องผลประโยชน์</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปกป้องความปลอดภัยและความมั่นคงของธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อสอดส่องและป้องกันการประพฤติผิดในสถานประกอบการของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ยกตัวอย่าง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อตรวจหา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ป้องกัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และตอบสนองต่อการการเรียกร้องสิทธิโดยทุจริต</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อกำหนดความเสี่ยงการฉ้อโกงรวมทั้งระบุธุรกรรมอันเป็นการฉ้อโกง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การเรียกร้องเกี่ยวกับการละเมิดทรัพย์สินทางปัญญา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือการฝ่าฝืนกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดการและป้องกันความสูญเสียซึ่งทรัพย์สินของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการตรวจสอบรายชื่อบุคคลที่ถูกกำหนด</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการความเสี่ยง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การตรวจสอบและบันทึกภายใน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการสินทรัพย์</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ระบบ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และการควบคุมกิจการอื่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อติดตามสถานการณ์</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อป้องกันและรายงานการกระทำความผิดทางอาญา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อป้องกันความปลอดภัยและความมั่นคงของธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >สำหรับใช้อ้างอิงและเป็นหลักฐานที่เกี่ยวข้องกับการเรียกร้องสิทธิ์และการดำเนินคดี</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >12)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การทำธุรกรรมเกี่ยวกับบริษัท</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ในกรณีที่มีการการขาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >โอน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ควบกิจการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ปฏิรูปองค์กร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือกรณีที่คล้ายกันนี้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เราอาจถ่ายโอนข้อมูลของคุณไปยังบุคคลที่สามหนึ่งรายหรือมากกว่าหนึ่งรายได้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ซึ่งเป็นส่วนหนึ่งของธุรกรรมนั้น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >13)</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >ชีวิต</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปกป้องละยับยั้งอันตรายอันเกิดกับชีวิต</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ร่างกาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือสุขภาพของบุคคลหนึ่ง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หากคุณไม่ยอมให้ข้อมูลส่วนบุคคลเมื่อมีการร้องขอ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราอาจไม่สามารถจัดหาสินค้าและบริการให้แก่คุณได้</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >2.2.2.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >ห้างสรรพสินค้า</span
                      ></u
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >เราอาจเก็บรวบรวม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >1)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >เพื่อจัดหาสินค้าและบริการให้แก่คุณ</span
                    ></strong
                  ><strong
                    ><span
                      style="width:15.57pt; text-indent:0pt; font-family:'DB Ozone X'; font-size:14pt; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อเข้าทำสัญญาและจัดการความสัมพันธ์เชิงสัญญากับคุณ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อจัดทำรายละเอียดเกี่ยวกับสัญญา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ธุรกรรมทางการเงินและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ที่เกี่ยวข้องกับการชำระเงิน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การตรวจสอบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การทวนสอบยืนยัน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การยกเลิกธุรกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการออกใบเสร็จรับเงินและใบแจ้งหนี้</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การเบิกจ่ายเงินสด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เจ้าหนี้การค้า</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หลักฐานการซื้อขาย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อเก็บบันทึกหลักฐาน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการโครงการไถ่ถอน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และเพื่อส่งคำเชิญให้คุณเข้าร่วมงานกิจกรรมและบริการของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อจัดงานกิจกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สถานที่</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และบริการอื่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ให้แก่คุณ</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >2)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >การตลาดและประชาสัมพันธ์</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อแจ้งการสื่อสารการตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สิทธิพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >โปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ประกาศ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข่าวสาร</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >กิจกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข้อมูลเกี่ยวกับสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >จากกลุ่มวันแบงค็อกของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >รวมถึงบริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >/</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หรือหุ้นส่วนทางธุรกิจตามความชอบของคุณที่ได้แจ้งไว้ทั้งโดยตรงหรือโดยอ้อม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >3)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >การจับรางวัล</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >การประกวดแข่งขัน</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >และข้อเสนอ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >/</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >โปรโมชั่นอื่น</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >ๆ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >เพื่อให้คุณได้มีส่วนร่วมในโปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >การประกวดแข่งขัน</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >การจับรางวัล</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >สิทธิพิเศษในการใช้พื้นที่สุดพิเศษเฉพาะคุณ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >และข้อเสนอ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >/</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >โปรโมชั่นอื่น</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >ๆ</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >4)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การลงทะเบียนและการพิสูจน์ตัวบุคคล</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';">เพื่อลงทะเบียน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ยืนยัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ระบุตัวตน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และพิสูจน์ตัวตนหรืออัตลักษณ์บุคคลของคุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >5)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การสื่อสารและบริหารจัดการความสัมพันธ์ของเรากับคุณ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';"
                    >เพื่อสื่อสารกับคุณเกี่ยวกับสินค้าและบริการที่คุณได้รับจากเรารวมทั้งรับข้อมูลเกี่ยวกับสินค้าและบริการจากคุณ</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อดำเนินการและปรับปรุงข้อมูลของคุณให้เป็นปัจจุบัน</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่ออำนวยความสะดวกในการใช้สินค้าและบริการแก่คุณ</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อจัดการรับมือข้อสงสัยเกี่ยวกับการบริการลูกค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">คำร้องขอ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">คำติชม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อร้องเรียน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การเรียกร้องสิทธิ์การรับประกัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อพิพาท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือการชดเชยค่าสินไหมทดแทน</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อจัดการกับปัญหาทางเทคนิคและข้อตกลงการค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >6)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การทำธุรกรรมและ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';">/</span></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >หรือการชำระเงิน</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';">เช่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การดำเนินการชำระเงินหรือธุรกรรมต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การวางบิล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การดำเนินการ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การหักบัญชี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การคืนเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือกิจกรรมการไกล่เกลี่ย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งรวมถึงธุรกรรมทางการเงินทั้งหมดหรือการชำระเงินที่เกี่ยวข้องกับการเก็บรักษาบันทึก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การออกหนังสือเรียกชำระเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใบกำกับภาษี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใบเสร็จรับเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และการจัดส่งเอกสารดังกล่าว</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >7)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >การศึกษาและวิเคราะห์ข้อมูล</span
                    ></strong
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลเพื่อการพัฒนาสินค้าและบริการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การวิจัยตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การสำรวจตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การประเมินผลตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และพฤติกรรมการตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลเพื่อปรับปรุงประสิทธิภาพทางการตลาดและข้อเสนอการขายสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;&nbsp;</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อประเมินประโยชน์ที่คุณได้รับจากโซลูชั่นต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับใช้ในการปรับปรุงระบบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;(</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >พัฒนาต้นแบบโดยแบ่งประเภทตามกลุ่มลูกค้าเพื่อการให้บริการที่ดียิ่งขึ้น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >);&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับใช้ในการเพิ่มโอกาสทางธุรกิจ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อประเมินผล</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >พัฒนา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >จัดการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ปรับปรุง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ค้นคว้าวิจัย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และพัฒนาบริการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สินค้า</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ระบบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และการดำเนินธุรกิจสำหรับคุณและลูกค้าของเราทุกคน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >8)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การดำเนินธุรกิจ</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปรับปรุงข้อมูลลูกค้าให้เป็นปัจจุบัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อรักษาความถูกต้องของข้อมูล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับป้องกันความเสี่ยง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;(</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >พัฒนาต้นแบบเพื่อคาดการณ์ความเป็นไปได้ของการเกิดหนี้ที่ไม่ก่อให้เกิดรายได้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคาดการณ์โอกาสการเกิดอุบัติเหตุ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >);&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการประเมินความเสี่ยงของลูกค้า</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการควบคุมความเสี่ยงสถาบัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การตรวจสอบบัญชีและการเก็บรักษาบันทึกการตรวจสอบบัญชี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การวิเคราะห์ความเสี่ยงด้านสินเชื่อ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดเก็บบันทึกทางธุรกิจรวมทั้งดำเนินการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >จัดการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และคงไว้ซึ่งการดำเนินธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อรักษาการปฏิบัติงานด้านไอที</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการระบบสื่อสาร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การดำเนินงานด้านความปลอดภัยของระบบไอทีและการตรวจสอบความปลอดภัยของระบบไอที</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อดำรงไว้ซึ่งการบริหารจัดการธุรกิจภายในสำหรับการปฏิบัติตามข้อกำหนด</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >นโยบาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และกระบวนการขั้นตอนภายในองค์กร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อเก็บรักษาบันทึกความถี่การเข้าชม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >9)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การปฏิบัติตามระเบียบบังคับและข้อผูกพัน</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปฏิบัติตามข้อผูกพันทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >กระบวนการทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคำสั่งจากหน่วยงานของรัฐ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ซึ่งอาจรวมถึงคำสั่งจากหน่วยงานของรัฐในต่างประเทศนอกเหนือจากประเทศไทย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >/</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือให้ความร่วมมือกับศาล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานกำกับดูแล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานของรัฐ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และหน่วยงานบังคับใช้กฎหมายเมื่อมีเหตุอันเชื่อได้ว่าเราจำเป็นต้องกระทำการเช่นนั้นตามกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเมื่อการเปิดเผยซึ่งข้อมูลส่วนบุคคลของคุณมีความจำเป็นอย่างยิ่งเพื่อเป็นการปฏิบัติตามข้อผูกพันทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >กระบวนการทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคำสั่งจากหน่วยงานของรัฐดังกล่าว</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดทำและจัดการแจ้งภาษี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อติดต่อหน่วยงานที่เกี่ยวข้องด้านภาษี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานกำกับดูแลการบริการด้านการเงิน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และหน่วยงานที่กำกับดูและหน่วยงานของรัฐอื่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อการสอบสวนหรือป้องกันอาชญากรรม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >10)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การทำงานของเว็บไซต์และแพลตฟอร์มของเรา</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดูแล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ดำเนินการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ติดตาม</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ตรวจสอบ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และจัดการเกี่ยวกับเว็บไซต์และแพลตฟอร์มของเราเพื่ออำนวยความสะดวกและให้แน่ใจว่าเว็บไซต์และแพลตฟอร์มของเราทำงานได้อย่างเหมาะสม</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >มีประสิทธิภาพ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และปลอดภัย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อให้คุณได้รับประสบการณ์ที่สะดวกสบายในการใช้งานเว็บไซต์และแพลตฟอร์มของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปรับปรุงรูปแบบการจัดวางและเนื้อหาของเว็บไซต์และแพลตฟอร์มของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อให้คุณสามารถเข้าถึงระบบที่เรามีให้บริการและเพื่อให้ความช่วยเหลือทางเทคนิค</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >11)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การปกป้องผลประโยชน์</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปกป้องความปลอดภัยและความมั่นคงของธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อสอดส่องและป้องกันการประพฤติผิดในสถานประกอบการของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ยกตัวอย่าง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อตรวจหา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ป้องกัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และตอบสนองต่อการการเรียกร้องสิทธิโดยทุจริต</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อกำหนดความเสี่ยงการฉ้อโกงรวมทั้งระบุธุรกรรมอันเป็นการฉ้อโกง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การเรียกร้องเกี่ยวกับการละเมิดทรัพย์สินทางปัญญา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือการฝ่าฝืนกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดการและป้องกันความสูญเสียซึ่งทรัพย์สินของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการตรวจสอบรายชื่อบุคคลที่ถูกกำหนด</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการความเสี่ยง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การตรวจสอบและบันทึกภายใน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการสินทรัพย์</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ระบบ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และการควบคุมกิจการอื่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อติดตามสถานการณ์</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อป้องกันและรายงานการกระทำความผิดทางอาญา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อป้องกันความปลอดภัยและความมั่นคงของธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >สำหรับใช้อ้างอิงและเป็นหลักฐานที่เกี่ยวข้องกับการเรียกร้องสิทธิ์และการดำเนินคดี</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >12)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การทำธุรกรรมเกี่ยวกับบริษัท</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ในกรณีที่มีการการขาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >โอน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ควบกิจการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ปฏิรูปองค์กร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือกรณีที่คล้ายกันนี้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เราอาจถ่ายโอนข้อมูลของคุณไปยังบุคคลที่สามหนึ่งรายหรือมากกว่าหนึ่งรายได้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ซึ่งเป็นส่วนหนึ่งของธุรกรรมนั้น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >13)</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >ชีวิต</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปกป้องละยับยั้งอันตรายอันเกิดกับชีวิต</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ร่างกาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือสุขภาพของบุคคลหนึ่ง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หากคุณไม่ยอมให้ข้อมูลส่วนบุคคลเมื่อมีการร้องขอ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราอาจไม่สามารถจัดหาสินค้าและบริการให้แก่คุณได้</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >2.2.3.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >พื้นที่ใช้สอยสำหรับทำงานร่วมกัน</span
                      ></u
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >เราอาจเก็บรวบรวม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >1)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >เพื่อจัดหาสินค้าและบริการให้แก่คุณ</span
                    ></strong
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อเข้าทำสัญญาและจัดการความสัมพันธ์เชิงสัญญากับคุณ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อจัดทำรายละเอียดเกี่ยวกับสัญญา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ธุรกรรมทางการเงินและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ที่เกี่ยวข้องกับการชำระเงิน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การตรวจสอบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การทวนสอบยืนยัน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การยกเลิกธุรกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อบริหารจัดการการใช้บัตรเข้าออก</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการเกี่ยวกับสมาชิกภาพของคุณ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อเก็บบันทึกหลักฐาน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และเพื่อส่งคำเชิญให้คุณเข้าร่วมงานกิจกรรมและบริการของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อจัดงานกิจกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สถานที่</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และบริการอื่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ให้แก่คุณ</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >2)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >การตลาดและประชาสัมพันธ์</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อแจ้งการสื่อสารการตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สิทธิพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >โปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ประกาศ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข่าวสาร</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >กิจกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข้อมูลเกี่ยวกับสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >จากกลุ่มวันแบงค็อกของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >รวมถึงบริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >/</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หรือหุ้นส่วนทางธุรกิจตามความชอบของคุณที่ได้แจ้งไว้ทั้งโดยตรงหรือโดยอ้อม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >3)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >การจับรางวัล</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >การประกวดแข่งขัน</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >และข้อเสนอ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >/</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >โปรโมชั่นอื่น</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >ๆ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >เพื่อให้คุณได้มีส่วนร่วมในโปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >การประกวดแข่งขัน</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >การจับรางวัล</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >สิทธิพิเศษในการใช้พื้นที่สุดพิเศษเฉพาะคุณ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >และข้อเสนอ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >/</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >โปรโมชั่นอื่น</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >ๆ</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >4)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การลงทะเบียนและการพิสูจน์ตัวบุคคล</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';">เพื่อลงทะเบียน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ยืนยัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ระบุตัวตน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และพิสูจน์ตัวตนหรืออัตลักษณ์บุคคลของคุณ</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >5)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การสื่อสารและบริหารจัดการความสัมพันธ์ของเรากับคุณ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';"
                    >เพื่อสื่อสารกับคุณเกี่ยวกับสินค้าและบริการที่คุณได้รับจากเรารวมทั้งรับข้อมูลเกี่ยวกับสินค้าและบริการจากคุณ</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อดำเนินการและปรับปรุงข้อมูลของคุณให้เป็นปัจจุบัน</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่ออำนวยความสะดวกในการใช้สินค้าและบริการแก่คุณ</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อจัดการรับมือข้อสงสัยเกี่ยวกับการบริการลูกค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">คำร้องขอ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">คำติชม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อร้องเรียน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การเรียกร้องสิทธิ์การรับประกัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อพิพาท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือการชดเชยค่าสินไหมทดแทน</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อจัดการกับปัญหาทางเทคนิคและข้อตกลงการค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >6)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การทำธุรกรรมและ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';">/</span></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >หรือการชำระเงิน</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เช่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การดำเนินการชำระเงินหรือธุรกรรมต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การวางบิล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การดำเนินการ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การหักบัญชี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การคืนเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือกิจกรรมการไกล่เกลี่ย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งรวมถึงธุรกรรมทางการเงินทั้งหมดหรือการชำระเงินที่เกี่ยวข้องกับการเก็บรักษาบันทึก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การออกหนังสือเรียกชำระเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใบกำกับภาษี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใบเสร็จรับเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และการจัดส่งเอกสารดังกล่าว</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >7)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >การศึกษาและวิเคราะห์ข้อมูล</span
                    ></strong
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลเพื่อการพัฒนาสินค้าและบริการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การวิจัยตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การสำรวจตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การประเมินผลตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และพฤติกรรมการตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลเพื่อปรับปรุงประสิทธิภาพทางการตลาดและข้อเสนอการขายสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;&nbsp;</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อประเมินประโยชน์ที่คุณได้รับจากโซลูชั่นต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับใช้ในการปรับปรุงระบบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;(</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >พัฒนาต้นแบบโดยแบ่งประเภทตามกลุ่มลูกค้าเพื่อการให้บริการที่ดียิ่งขึ้น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >);&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับใช้ในการเพิ่มโอกาสทางธุรกิจ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อประเมินผล</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >พัฒนา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >จัดการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ปรับปรุง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ค้นคว้าวิจัย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และพัฒนาบริการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สินค้า</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ระบบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และการดำเนินธุรกิจสำหรับคุณและลูกค้าของเราทุกคน</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >8)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การดำเนินธุรกิจ</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปรับปรุงข้อมูลลูกค้าให้เป็นปัจจุบัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อรักษาความถูกต้องของข้อมูล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับป้องกันความเสี่ยง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;(</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >พัฒนาต้นแบบเพื่อคาดการณ์ความเป็นไปได้ของการเกิดหนี้ที่ไม่ก่อให้เกิดรายได้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคาดการณ์โอกาสการเกิดอุบัติเหตุ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >);&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการประเมินความเสี่ยงของลูกค้า</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการควบคุมความเสี่ยงสถาบัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การตรวจสอบบัญชีและการเก็บรักษาบันทึกการตรวจสอบบัญชี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การวิเคราะห์ความเสี่ยงด้านสินเชื่อ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดเก็บบันทึกทางธุรกิจรวมทั้งดำเนินการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >จัดการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และคงไว้ซึ่งการดำเนินธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อรักษาการปฏิบัติงานด้านไอที</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการระบบสื่อสาร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การดำเนินงานด้านความปลอดภัยของระบบไอทีและการตรวจสอบความปลอดภัยของระบบไอที</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อดำรงไว้ซึ่งการบริหารจัดการธุรกิจภายในสำหรับการปฏิบัติตามข้อกำหนด</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >นโยบาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และกระบวนการขั้นตอนภายในองค์กร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อเก็บรักษาบันทึกความถี่การเข้าชม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >9)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การปฏิบัติตามระเบียบบังคับและข้อผูกพัน</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปฏิบัติตามข้อผูกพันทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >กระบวนการทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคำสั่งจากหน่วยงานของรัฐ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ซึ่งอาจรวมถึงคำสั่งจากหน่วยงานของรัฐในต่างประเทศนอกเหนือจากประเทศไทย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >/</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือให้ความร่วมมือกับศาล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานกำกับดูแล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานของรัฐ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และหน่วยงานบังคับใช้กฎหมายเมื่อมีเหตุอันเชื่อได้ว่าเราจำเป็นต้องกระทำการเช่นนั้นตามกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเมื่อการเปิดเผยซึ่งข้อมูลส่วนบุคคลของคุณมีความจำเป็นอย่างยิ่งเพื่อเป็นการปฏิบัติตามข้อผูกพันทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >กระบวนการทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคำสั่งจากหน่วยงานของรัฐดังกล่าว</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดทำและจัดการแจ้งภาษี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อติดต่อหน่วยงานที่เกี่ยวข้องด้านภาษี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานกำกับดูแลการบริการด้านการเงิน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และหน่วยงานที่กำกับดูและหน่วยงานของรัฐอื่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อการสอบสวนหรือป้องกันอาชญากรรม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >10)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การทำงานของเว็บไซต์และแพลตฟอร์มของเรา</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดูแล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ดำเนินการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ติดตาม</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ตรวจสอบ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และจัดการเกี่ยวกับเว็บไซต์และแพลตฟอร์มของเราเพื่ออำนวยความสะดวกและให้แน่ใจว่าเว็บไซต์และแพลตฟอร์มของเราทำงานได้อย่างเหมาะสม</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >มีประสิทธิภาพ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และปลอดภัย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อให้คุณได้รับประสบการณ์ที่สะดวกสบายในการใช้งานเว็บไซต์และแพลตฟอร์มของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปรับปรุงรูปแบบการจัดวางและเนื้อหาของเว็บไซต์และแพลตฟอร์มของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อให้คุณสามารถเข้าถึงระบบที่เรามีให้บริการและเพื่อให้ความช่วยเหลือทางเทคนิค</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >11)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การปกป้องผลประโยชน์</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปกป้องความปลอดภัยและความมั่นคงของธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อสอดส่องและป้องกันการประพฤติผิดในสถานประกอบการของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ยกตัวอย่าง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อตรวจหา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ป้องกัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และตอบสนองต่อการการเรียกร้องสิทธิโดยทุจริต</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อกำหนดความเสี่ยงการฉ้อโกงรวมทั้งระบุธุรกรรมอันเป็นการฉ้อโกง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การเรียกร้องเกี่ยวกับการละเมิดทรัพย์สินทางปัญญา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือการฝ่าฝืนกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดการและป้องกันความสูญเสียซึ่งทรัพย์สินของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการตรวจสอบรายชื่อบุคคลที่ถูกกำหนด</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการความเสี่ยง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การตรวจสอบและบันทึกภายใน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการสินทรัพย์</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ระบบ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และการควบคุมกิจการอื่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อติดตามสถานการณ์</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อป้องกันและรายงานการกระทำความผิดทางอาญา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อป้องกันความปลอดภัยและความมั่นคงของธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >สำหรับใช้อ้างอิงและเป็นหลักฐานที่เกี่ยวข้องกับการเรียกร้องสิทธิ์และการดำเนินคดี</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >12)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การทำธุรกรรมเกี่ยวกับบริษัท</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ในกรณีที่มีการการขาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >โอน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ควบกิจการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ปฏิรูปองค์กร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือกรณีที่คล้ายกันนี้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เราอาจถ่ายโอนข้อมูลของคุณไปยังบุคคลที่สามหนึ่งรายหรือมากกว่าหนึ่งรายได้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ซึ่งเป็นส่วนหนึ่งของธุรกรรมนั้น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >13)</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >ชีวิต</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปกป้องละยับยั้งอันตรายอันเกิดกับชีวิต</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ร่างกาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือสุขภาพของบุคคลหนึ่ง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หากคุณไม่ยอมให้ข้อมูลส่วนบุคคลเมื่อมีการร้องขอ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราอาจไม่สามารถจัดหาสินค้าและบริการให้แก่คุณได้</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >2.2.4.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >ห้างค้าปลีก</span
                      ></u
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >เราอาจเก็บรวบรวม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >1)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >เพื่อจัดหาสินค้าและบริการให้แก่คุณ</span
                    ></strong
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อเข้าทำสัญญาและจัดการความสัมพันธ์เชิงสัญญากับคุณ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อจัดทำรายละเอียดเกี่ยวกับสัญญา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ธุรกรรมทางการเงินและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ที่เกี่ยวข้องกับการชำระเงิน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การตรวจสอบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การทวนสอบยืนยัน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การยกเลิกธุรกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการออกใบเสร็จรับเงินและใบแจ้งหนี้</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การเบิกจ่ายเงินสด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และเจ้าหนี้การค้า</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการเกี่ยวกับสมาชิกภาพของคุณ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อเก็บบันทึกหลักฐาน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และเพื่อส่งคำเชิญให้คุณเข้าร่วมงานกิจกรรมและบริการของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อจัดงานกิจกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สถานที่</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และบริการอื่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ให้แก่คุณ</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >2)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >การตลาดและประชาสัมพันธ์</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อแจ้งการสื่อสารการตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สิทธิพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >โปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ประกาศ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข่าวสาร</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >กิจกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข้อมูลเกี่ยวกับสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >จากกลุ่มวันแบงค็อกของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >รวมถึงบริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >/</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หรือหุ้นส่วนทางธุรกิจตามความชอบของคุณที่ได้แจ้งไว้ทั้งโดยตรงหรือโดยอ้อม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >3)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >การจับรางวัล</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >การประกวดแข่งขัน</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >และข้อเสนอ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >/</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >โปรโมชั่นอื่น</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >ๆ</span
                    ></strong
                  ><strong
                    ><span
                      style="width:20.29pt; text-indent:0pt; font-family:'DB Ozone X'; display:inline-block;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >เพื่อให้คุณได้มีส่วนร่วมในโปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >การประกวดแข่งขัน</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >การจับรางวัล</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >สิทธิพิเศษในการใช้พื้นที่สุดพิเศษเฉพาะคุณ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >และข้อเสนอ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >/</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >โปรโมชั่นอื่น</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >ๆ</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >4)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การลงทะเบียนและการพิสูจน์ตัวบุคคล</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';">เพื่อลงทะเบียน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ยืนยัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ระบุตัวตน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และพิสูจน์ตัวตนหรืออัตลักษณ์บุคคลของคุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >5)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การสื่อสารและบริหารจัดการความสัมพันธ์ของเรากับคุณ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';"
                    >เพื่อสื่อสารกับคุณเกี่ยวกับสินค้าและบริการที่คุณได้รับจากเรารวมทั้งรับข้อมูลเกี่ยวกับสินค้าและบริการจากคุณ</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อดำเนินการและปรับปรุงข้อมูลของคุณให้เป็นปัจจุบัน</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่ออำนวยความสะดวกในการใช้สินค้าและบริการแก่คุณ</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อจัดการรับมือข้อสงสัยเกี่ยวกับการบริการลูกค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">คำร้องขอ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">คำติชม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อร้องเรียน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การเรียกร้องสิทธิ์การรับประกัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อพิพาท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือการชดเชยค่าสินไหมทดแทน</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อจัดการกับปัญหาทางเทคนิคและข้อตกลงการค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >6)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การทำธุรกรรมและ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';">/</span></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >หรือการชำระเงิน</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เช่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การดำเนินการชำระเงินหรือธุรกรรมต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การวางบิล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การดำเนินการ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การหักบัญชี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การคืนเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือกิจกรรมการไกล่เกลี่ย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งรวมถึงธุรกรรมทางการเงินทั้งหมดหรือการชำระเงินที่เกี่ยวข้องกับการเก็บรักษาบันทึก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การออกหนังสือเรียกชำระเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใบกำกับภาษี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใบเสร็จรับเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และการจัดส่งเอกสารดังกล่าว</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >7)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >การศึกษาและวิเคราะห์ข้อมูล</span
                    ></strong
                  ><span
                    style="width:15.98pt; text-indent:0pt; font-family:'DB Ozone X'; font-size:14pt; display:inline-block;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลเพื่อการพัฒนาสินค้าและบริการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การวิจัยตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การสำรวจตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การประเมินผลตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และพฤติกรรมการตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลเพื่อปรับปรุงประสิทธิภาพทางการตลาดและข้อเสนอการขายสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;&nbsp;</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อประเมินประโยชน์ที่คุณได้รับจากโซลูชั่นต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับใช้ในการปรับปรุงระบบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;(</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >พัฒนาต้นแบบโดยแบ่งประเภทตามกลุ่มลูกค้าเพื่อการให้บริการที่ดียิ่งขึ้น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >);&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับใช้ในการเพิ่มโอกาสทางธุรกิจ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อประเมินผล</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >พัฒนา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >จัดการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ปรับปรุง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ค้นคว้าวิจัย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และพัฒนาบริการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สินค้า</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ระบบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และการดำเนินธุรกิจสำหรับคุณและลูกค้าของเราทุกคน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >8)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การดำเนินธุรกิจ</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปรับปรุงข้อมูลลูกค้าให้เป็นปัจจุบัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อรักษาความถูกต้องของข้อมูล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับป้องกันความเสี่ยง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;(</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >พัฒนาต้นแบบเพื่อคาดการณ์ความเป็นไปได้ของการเกิดหนี้ที่ไม่ก่อให้เกิดรายได้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคาดการณ์โอกาสการเกิดอุบัติเหตุ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >);&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการประเมินความเสี่ยงของลูกค้า</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการควบคุมความเสี่ยงสถาบัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การตรวจสอบบัญชีและการเก็บรักษาบันทึกการตรวจสอบบัญชี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การวิเคราะห์ความเสี่ยงด้านสินเชื่อ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดเก็บบันทึกทางธุรกิจรวมทั้งดำเนินการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >จัดการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และคงไว้ซึ่งการดำเนินธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อรักษาการปฏิบัติงานด้านไอที</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการระบบสื่อสาร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การดำเนินงานด้านความปลอดภัยของระบบไอทีและการตรวจสอบความปลอดภัยของระบบไอที</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อดำรงไว้ซึ่งการบริหารจัดการธุรกิจภายในสำหรับการปฏิบัติตามข้อกำหนด</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >นโยบาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และกระบวนการขั้นตอนภายในองค์กร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อเก็บรักษาบันทึกความถี่การเข้าชม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >9)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การปฏิบัติตามระเบียบบังคับและข้อผูกพัน</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปฏิบัติตามข้อผูกพันทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >กระบวนการทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคำสั่งจากหน่วยงานของรัฐ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ซึ่งอาจรวมถึงคำสั่งจากหน่วยงานของรัฐในต่างประเทศนอกเหนือจากประเทศไทย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >/</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือให้ความร่วมมือกับศาล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานกำกับดูแล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานของรัฐ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และหน่วยงานบังคับใช้กฎหมายเมื่อมีเหตุอันเชื่อได้ว่าเราจำเป็นต้องกระทำการเช่นนั้นตามกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเมื่อการเปิดเผยซึ่งข้อมูลส่วนบุคคลของคุณมีความจำเป็นอย่างยิ่งเพื่อเป็นการปฏิบัติตามข้อผูกพันทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >กระบวนการทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคำสั่งจากหน่วยงานของรัฐดังกล่าว</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดทำและจัดการแจ้งภาษี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อติดต่อหน่วยงานที่เกี่ยวข้องด้านภาษี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานกำกับดูแลการบริการด้านการเงิน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และหน่วยงานที่กำกับดูและหน่วยงานของรัฐอื่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อการสอบสวนหรือป้องกันอาชญากรรม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >10)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การทำงานของเว็บไซต์และแพลตฟอร์มของเรา</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดูแล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ดำเนินการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ติดตาม</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ตรวจสอบ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และจัดการเกี่ยวกับเว็บไซต์และแพลตฟอร์มของเราเพื่ออำนวยความสะดวกและให้แน่ใจว่าเว็บไซต์และแพลตฟอร์มของเราทำงานได้อย่างเหมาะสม</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >มีประสิทธิภาพ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และปลอดภัย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อให้คุณได้รับประสบการณ์ที่สะดวกสบายในการใช้งานเว็บไซต์และแพลตฟอร์มของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปรับปรุงรูปแบบการจัดวางและเนื้อหาของเว็บไซต์และแพลตฟอร์มของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อให้คุณสามารถเข้าถึงระบบที่เรามีให้บริการและเพื่อให้ความช่วยเหลือทางเทคนิค</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >11)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การปกป้องผลประโยชน์</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปกป้องความปลอดภัยและความมั่นคงของธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อสอดส่องและป้องกันการประพฤติผิดในสถานประกอบการของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ยกตัวอย่าง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อตรวจหา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ป้องกัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และตอบสนองต่อการการเรียกร้องสิทธิโดยทุจริต</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อกำหนดความเสี่ยงการฉ้อโกงรวมทั้งระบุธุรกรรมอันเป็นการฉ้อโกง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การเรียกร้องเกี่ยวกับการละเมิดทรัพย์สินทางปัญญา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือการฝ่าฝืนกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดการและป้องกันความสูญเสียซึ่งทรัพย์สินของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการตรวจสอบรายชื่อบุคคลที่ถูกกำหนด</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการความเสี่ยง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การตรวจสอบและบันทึกภายใน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการสินทรัพย์</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ระบบ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และการควบคุมกิจการอื่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อติดตามสถานการณ์</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อป้องกันและรายงานการกระทำความผิดทางอาญา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อป้องกันความปลอดภัยและความมั่นคงของธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >สำหรับใช้อ้างอิงและเป็นหลักฐานที่เกี่ยวข้องกับการเรียกร้องสิทธิ์และการดำเนินคดี</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >12)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การทำธุรกรรมเกี่ยวกับบริษัท</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ในกรณีที่มีการการขาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >โอน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ควบกิจการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ปฏิรูปองค์กร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือกรณีที่คล้ายกันนี้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เราอาจถ่ายโอนข้อมูลของคุณไปยังบุคคลที่สามหนึ่งรายหรือมากกว่าหนึ่งรายได้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ซึ่งเป็นส่วนหนึ่งของธุรกรรมนั้น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >13)</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >ชีวิต</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปกป้องละยับยั้งอันตรายอันเกิดกับชีวิต</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ร่างกาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือสุขภาพของบุคคลหนึ่ง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หากคุณไม่ยอมให้ข้อมูลส่วนบุคคลเมื่อมีการร้องขอ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราอาจไม่สามารถจัดหาสินค้าและบริการให้แก่คุณได้</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >2.2.5.&nbsp;</span
                    ></strong
                  ><strong
                    ><u
                      ><span style="font-family:'Angsana New';"
                        >ซอฟแวร์แอฟพลิเคชัน</span
                      ></u
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >เราอาจเก็บรวบรวม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >หรือเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >1)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >เพื่อจัดหาสินค้าและบริการให้แก่คุณ</span
                    ></strong
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อเข้าทำสัญญาและจัดการความสัมพันธ์เชิงสัญญากับคุณ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อจัดทำรายละเอียดเกี่ยวกับสัญญา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ธุรกรรมทางการเงินและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ที่เกี่ยวข้องกับการชำระเงิน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การตรวจสอบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การทวนสอบยืนยัน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การยกเลิกธุรกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่ออนุญาตการเข้าถึงสถานประกอบการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อจัดทำช่องทางการตลาดแบบบูรณาการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ที่จอดรถ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >บ้านที่สามารถเชื่อมต่อถึงกัน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การจัดการพื้นที่</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การสร้างความผูกพันก่อนเที่ยวชม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การจัดการสำนักงานและโปรแกรมออนไลน์</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อให้บริการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;Wi-Fi</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >2)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >การตลาดและประชาสัมพันธ์</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อแจ้งการสื่อสารการตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สิทธิพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >โปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ประกาศ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข่าวสาร</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >กิจกรรม</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ข้อมูลเกี่ยวกับสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >จากกลุ่มวันแบงค็อกของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >รวมถึงบริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >บริษัทย่อย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >/</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >หรือหุ้นส่วนทางธุรกิจตามความชอบของคุณที่ได้แจ้งไว้ทั้งโดยตรงหรือโดยอ้อม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >3)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >การจับรางวัล</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >การประกวดแข่งขัน</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >และข้อเสนอ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >/</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >โปรโมชั่นอื่น</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >ๆ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >เพื่อให้คุณได้มีส่วนร่วมในโปรโมชั่น</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >ข้อเสนอพิเศษ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >การประกวดแข่งขัน</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >การจับรางวัล</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >สิทธิพิเศษในการใช้พื้นที่สุดพิเศษเฉพาะคุณ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >และข้อเสนอ</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >/</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >โปรโมชั่นอื่น</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >ๆ</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >4)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การลงทะเบียนและการพิสูจน์ตัวบุคคล</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';">เพื่อลงทะเบียน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ยืนยัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ระบุตัวตน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และพิสูจน์ตัวตนหรืออัตลักษณ์บุคคลของคุณ</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >5)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การสื่อสารและบริหารจัดการความสัมพันธ์ของเรากับคุณ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';"
                    >เพื่อสื่อสารกับคุณเกี่ยวกับสินค้าและบริการที่คุณได้รับจากเรารวมทั้งรับข้อมูลเกี่ยวกับสินค้าและบริการจากคุณ</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อดำเนินการและปรับปรุงข้อมูลของคุณให้เป็นปัจจุบัน</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่ออำนวยความสะดวกในการใช้สินค้าและบริการแก่คุณ</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อจัดการรับมือข้อสงสัยเกี่ยวกับการบริการลูกค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">คำร้องขอ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">คำติชม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อร้องเรียน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การเรียกร้องสิทธิ์การรับประกัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ข้อพิพาท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือการชดเชยค่าสินไหมทดแทน</span
                  ><span style="font-family:'DB Ozone X';">;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อจัดการกับปัญหาทางเทคนิคและข้อตกลงการค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >6)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >การทำธุรกรรมและ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';">/</span></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >หรือการชำระเงิน</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New';">เช่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การดำเนินการชำระเงินหรือธุรกรรมต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การวางบิล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การดำเนินการ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การหักบัญชี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การคืนเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือกิจกรรมการไกล่เกลี่ย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งรวมถึงธุรกรรมทางการเงินทั้งหมดหรือการชำระเงินที่เกี่ยวข้องกับการเก็บรักษาบันทึก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การออกหนังสือเรียกชำระเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใบกำกับภาษี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใบเสร็จรับเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และการจัดส่งเอกสารดังกล่าว</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; text-indent:36pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                      >7)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; font-size:14pt;"
                      >การศึกษาและวิเคราะห์ข้อมูล</span
                    ></strong
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลเพื่อการพัฒนาสินค้าและบริการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การวิจัยตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การสำรวจตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >การประเมินผลตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >,&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และพฤติกรรมการตลาด</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลเพื่อปรับปรุงประสิทธิภาพทางการตลาดและข้อเสนอการขายสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ของเรา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;&nbsp;</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อประเมินประโยชน์ที่คุณได้รับจากโซลูชั่นต่าง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ๆ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับใช้ในการปรับปรุงระบบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;(</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เช่น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >พัฒนาต้นแบบโดยแบ่งประเภทตามกลุ่มลูกค้าเพื่อการให้บริการที่ดียิ่งขึ้น</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >);&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับใช้ในการเพิ่มโอกาสทางธุรกิจ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >;&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >เพื่อประเมินผล</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >พัฒนา</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >จัดการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ปรับปรุง</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ค้นคว้าวิจัย</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และพัฒนาบริการ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >สินค้า</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >ระบบ</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; font-size:14pt;"
                    >และการดำเนินธุรกิจสำหรับคุณและลูกค้าของเราทุกคน</span
                  ><span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <span style="font-family:'DB Ozone X'; font-size:14pt;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >8)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การดำเนินธุรกิจ</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปรับปรุงข้อมูลลูกค้าให้เป็นปัจจุบัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อรักษาความถูกต้องของข้อมูล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการวิเคราะห์ข้อมูลสำหรับป้องกันความเสี่ยง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;(</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >พัฒนาต้นแบบเพื่อคาดการณ์ความเป็นไปได้ของการเกิดหนี้ที่ไม่ก่อให้เกิดรายได้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคาดการณ์โอกาสการเกิดอุบัติเหตุ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >);&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการประเมินความเสี่ยงของลูกค้า</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการควบคุมความเสี่ยงสถาบัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การตรวจสอบบัญชีและการเก็บรักษาบันทึกการตรวจสอบบัญชี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การวิเคราะห์ความเสี่ยงด้านสินเชื่อ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดเก็บบันทึกทางธุรกิจรวมทั้งดำเนินการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >จัดการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และคงไว้ซึ่งการดำเนินธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อรักษาการปฏิบัติงานด้านไอที</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการระบบสื่อสาร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การดำเนินงานด้านความปลอดภัยของระบบไอทีและการตรวจสอบความปลอดภัยของระบบไอที</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อดำรงไว้ซึ่งการบริหารจัดการธุรกิจภายในสำหรับการปฏิบัติตามข้อกำหนด</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >นโยบาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และกระบวนการขั้นตอนภายในองค์กร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อเก็บรักษาบันทึกความถี่การเข้าชม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >9)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การปฏิบัติตามระเบียบบังคับและข้อผูกพัน</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปฏิบัติตามข้อผูกพันทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >กระบวนการทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคำสั่งจากหน่วยงานของรัฐ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ซึ่งอาจรวมถึงคำสั่งจากหน่วยงานของรัฐในต่างประเทศนอกเหนือจากประเทศไทย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >/</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือให้ความร่วมมือกับศาล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานกำกับดูแล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานของรัฐ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และหน่วยงานบังคับใช้กฎหมายเมื่อมีเหตุอันเชื่อได้ว่าเราจำเป็นต้องกระทำการเช่นนั้นตามกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเมื่อการเปิดเผยซึ่งข้อมูลส่วนบุคคลของคุณมีความจำเป็นอย่างยิ่งเพื่อเป็นการปฏิบัติตามข้อผูกพันทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >กระบวนการทางกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือคำสั่งจากหน่วยงานของรัฐดังกล่าว</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดทำและจัดการแจ้งภาษี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อติดต่อหน่วยงานที่เกี่ยวข้องด้านภาษี</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หน่วยงานกำกับดูแลการบริการด้านการเงิน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และหน่วยงานที่กำกับดูและหน่วยงานของรัฐอื่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อการสอบสวนหรือป้องกันอาชญากรรม</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >10)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การทำงานของเว็บไซต์และแพลตฟอร์มของเรา</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เช่น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดูแล</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ดำเนินการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ติดตาม</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ตรวจสอบ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และจัดการเกี่ยวกับเว็บไซต์และแพลตฟอร์มของเราเพื่ออำนวยความสะดวกและให้แน่ใจว่าเว็บไซต์และแพลตฟอร์มของเราทำงานได้อย่างเหมาะสม</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >มีประสิทธิภาพ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และปลอดภัย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อให้คุณได้รับประสบการณ์ที่สะดวกสบายในการใช้งานเว็บไซต์และแพลตฟอร์มของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปรับปรุงรูปแบบการจัดวางและเนื้อหาของเว็บไซต์และแพลตฟอร์มของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อให้คุณสามารถเข้าถึงระบบที่เรามีให้บริการและเพื่อให้ความช่วยเหลือทางเทคนิค</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >11)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การปกป้องผลประโยชน์</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปกป้องความปลอดภัยและความมั่นคงของธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อสอดส่องและป้องกันการประพฤติผิดในสถานประกอบการของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ยกตัวอย่าง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อตรวจหา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ป้องกัน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และตอบสนองต่อการการเรียกร้องสิทธิโดยทุจริต</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อกำหนดความเสี่ยงการฉ้อโกงรวมทั้งระบุธุรกรรมอันเป็นการฉ้อโกง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การเรียกร้องเกี่ยวกับการละเมิดทรัพย์สินทางปัญญา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือการฝ่าฝืนกฎหมาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อจัดการและป้องกันความสูญเสียซึ่งทรัพย์สินของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อดำเนินการตรวจสอบรายชื่อบุคคลที่ถูกกำหนด</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการความเสี่ยง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การตรวจสอบและบันทึกภายใน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >การจัดการสินทรัพย์</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ระบบ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และการควบคุมกิจการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >อื่นๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อติดตามสถานการณ์</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >;&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อป้องกันและรายงานการกระทำความผิดทางอาญา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >และเพื่อป้องกันความปลอดภัยและความมั่นคงของธุรกิจของเรา</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >สำหรับใช้อ้างอิงและเป็นหลักฐานที่เกี่ยวข้องกับการเรียกร้องสิทธิ์และการดำเนินคดี</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >12)&nbsp;</span
                    ></strong
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >การทำธุรกรรมเกี่ยวกับบริษัท</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ในกรณีที่มีการการขาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >โอน</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ควบกิจการ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ปฏิรูปองค์กร</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือกรณีที่คล้ายกันนี้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เราอาจถ่ายโอนข้อมูลของคุณไปยังบุคคลที่สามหนึ่งรายหรือมากกว่าหนึ่งรายได้</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ซึ่งเป็นส่วนหนึ่งของธุรกรรมนั้น</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:9pt; text-indent:36pt; line-height:14pt;"
                >
                  <strong
                    ><span
                      style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                      >13)</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><strong
                    ><span
                      style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                      >ชีวิต</span
                    ></strong
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >เพื่อปกป้องละยับยั้งอันตรายอันเกิดกับชีวิต</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ร่างกาย</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >หรือสุขภาพของบุคคลหนึ่ง</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span
                    style="font-family:'Angsana New'; font-size:14pt; color:#0d0d0d;"
                    >ๆ</span
                  ><span
                    style="font-family:'DB Ozone X'; font-size:14pt; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:9pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หากคุณไม่ยอมให้ข้อมูลส่วนบุคคลเมื่อมีการร้องขอ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราอาจไม่สามารถจัดหาสินค้าและบริการให้แก่คุณได้</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span
                    style="width:36pt; font-family:'DB Ozone X'; display:inline-block;"
                    >&nbsp;</span
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >14)</span
                    ></strong
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >วัตถุประสงค์ในการทำงาน</span
                    ></strong
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >เพื่อประโยชน์ในการดำเนินการเวปไซต์บนเวป</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >เซอเวอร์</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >นอกจากนั้น</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >เพื่อการเก็บประวัติการเข้าใช้งานในระยะสั้นในอันที่จะสอบสวนความพยายามในการจู่โจมเวป</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >หรือการใช้ในทางที่ผิด</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span
                    style="width:36pt; font-family:'DB Ozone X'; display:inline-block;"
                    >&nbsp;</span
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >15)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >คุ๊กกี้</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >กรุณาดูนโยบายคุ๊กกี้ที่นี่</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span
                    style="width:36pt; font-family:'DB Ozone X'; display:inline-block;"
                    >&nbsp;</span
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >16)&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                      >บริการวิเคราะห์เวป</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                      >&nbsp;</span
                    ></strong
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >กรุณาดูโนบายค๊กกกี้</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  ><span style="font-family:'Angsana New'; color:#0d0d0d;"
                    >เกี่ยวกับบริการวิเคาระห์เวปได้ที่นี่</span
                  ><span style="font-family:'DB Ozone X'; color:#0d0d0d;"
                    >&nbsp;</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';">3.</span></strong
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><strong
                      ><span style="font-family:'Angsana New';"
                        >บุคคลที่เราอาจเปิดเผยหรือถ่ายโอนข้อมูลส่วนบุคคลของคุณให้รับทราบ</span
                      ></strong
                    >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >เราอาจเปิดเผยข้อมูลของคุณให้แก่บุคคลที่สามดังต่อไปนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งเป็นผู้เก็บรวบรวม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และเปิดเผยข้อมูลส่วนบุคคลตามวัตถุประสงค์แห่งนโยบายความเป็นส่วนตัวฉบับนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยบุคคลที่สามเหล่านั้นอาจอยู่ในประเทศไทยและพื้นที่อื่นนอกประเทศไทย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >คุณสามารถดูรายละเอียดนโยบายความเป็นส่วนตัวของบุคคลที่สามเหล่านั้นได้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อทราบข้อมูลเพิ่มเติมเกี่ยวกับวิธีการที่บุคคลเหล่านั้นเก็บรวบรวม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และเปิดเผยข้อมูลส่วนบุคคลของคุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เนื่องจากคุณเองอยู่ภายใต้นโยบายความเป็นส่วนตัวของบุคคลเหล่านั้นด้วยเช่นกัน</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >3.1.&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ระบบนิเวศข้อมูลของกลุ่มวันแบงค็อก</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >เนื่องด้วยบริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">วันแบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">จำกัด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เป็นส่วนหนึ่งของบริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">วัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">แบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">จำกัด</span
                  ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                  ><span style="font-family:'Angsana New';"></span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">วัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">แบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">โฮลดิ้งส์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">จำกัด</span
                  ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                  ><span style="font-family:'Angsana New';"></span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">วัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">แบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เวนเจอร์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">จำกัด</span
                  ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทีซีซี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">แอสเซ็ทส์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">จำกัด</span
                  ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เฟรเซอร์ส</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">พร็อพเพอร์ตี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">โฮลดิ้ง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';">ประเทศไทย</span
                  ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                  ><span style="font-family:'Angsana New';">จำกัด</span
                  ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เฟรเซอร์ส</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">พร็อพเพอร์ตี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">จำกัด</span
                  ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เฟรเซอร์ส</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">พร็อพเพอร์ตี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เมเนจเมนท์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เซอร์วิสเซส</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';">ประเทศไทย</span
                  ><span style="font-family:'DB Ozone X';">)</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&nbsp;</span
                  ><span style="font-family:'Angsana New';">จำกัด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';">รวมกันเรีกว่า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&ldquo;</span
                  ><span style="font-family:'Angsana New';"
                    >กลุ่มวันแบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&rdquo;)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งทุกบริษัททำงานร่วมกันและแบ่งปันการบริการลูกค้าและระบบต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บางส่วนร่วมกัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งรวมถึงบริการและระบบต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ที่เกี่ยวข้องกับเว็บไซต์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ดังนั้น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราจึงอาจมีความจำเป็นต้องถ่ายโอนข้อมูลส่วนบุคคลของคุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรืออนุญาตให้บริษัทอื่นภายในกลุ่มวันแบงค็อกสามารถเข้าถึงข้อมูลส่วนบุคคลดังกล่าวได้เพื่อวัตถุประสงค์ตามที่กำหนดในนโยบายความเป็นส่วนตัวฉบับนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งจะทำให้บริษัทอื่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ภายในกลุ่มวันแบงค็อกสามารถอาศัยความยินยอมที่บริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">วันแบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">จำกัด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ได้รับมาได้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >3.2.&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ผู้ให้บริการของเรา</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >เราอาจใช้บริษัทอื่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ตัวแทน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือผู้รับเหมาดำเนินการให้บริการในนามของเราหรือเพื่อช่วยเหลือในการจัดหาสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ให้แก่คุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยที่เราอาจแบ่งปันข้อมูลส่วนบุคคลของคุณแก่ผู้ให้บริการของเรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือซัพพลายเออร์บุคคลนอก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >อันประกอบด้วยแต่ไม่จำกัดเพียง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(1)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้พัฒนาโปรแกรมคอมพิวเตอร์</span
                  ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้พัฒนาซอฟต์แวร์</span
                  ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ให้บริการด้านไอทีและบริษัทให้ความช่วยเหลือด้านไอที</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(2)&nbsp;</span
                  ><span style="font-family:'Angsana New';">นักการตลาด</span
                  ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                  ><span style="font-family:'Angsana New';">สื่อโฆษณา</span
                  ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                  ><span style="font-family:'Angsana New';">นักออกแบบ</span
                  ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                  ><span style="font-family:'Angsana New';">ครีเอทีฟ</span
                  ><span style="font-family:'DB Ozone X';">,&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หน่วยงานประชาสัมพันธ์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(3)&nbsp;</span
                  ><span style="font-family:'Angsana New';">นักจัดแคมเปญ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ผู้จัดงาน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >นักจัดกิจกรรมการตลาด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และหน่วยงานด้านการจัดการลูกค้าสัมพันธ์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(4)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ให้บริการจัดเก็บข้อมูลและระบบคลาวด์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(5)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ให้บริการด้านการจัดการทรัพย์สิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(6)</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&nbsp;</span
                  ><span style="font-family:'Angsana New';">ตัวแทนจำหน่าย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(7)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ให้บริการโลจิสติกส์และการจัดส่งสินค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(8)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ให้บริการชำระเงินและระบบการชำระเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&nbsp;</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(9)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บริษัทตัวแทนด้านการวิจัย</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(10)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ให้บริการด้านการวิเคราะห์</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(11)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บริษัทตัวแทนด้านการสำรวจ</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(12)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ให้บริการศูนย์ข้อมูลลูกค้า</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(13)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ให้บริการโทรคมนาคมและการสื่อสาร</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(14)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ให้บริการงานธุรการซึ่งเป็นบุคคลนอก</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(15)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ให้บริการด้านงานพิมพ์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >ในระยะเวลาที่มีการให้บริการดังกล่าว</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ให้บริการอาจมีการเข้าถึงข้อมูลส่วนบุคคลของคุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">อย่างไรก็ตาม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราจะให้ข้อมูลแก่ผู้ให้บริการของเราเฉพาะที่จำเป็นสำหรับใช้ในการดำเนินการให้บริการเท่านั้น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และจะขอให้ผู้ให้บริการไม่นำไปใช้ซึ่งข้อมูลของคุณเพื่อวัตถุประสงค์อื่นใด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยเราจะตรวจสอบให้แน่ใจว่าผู้ให้บริการที่เราทำงานร่วมด้วยนั้นจะเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้อย่างปลอดภัยตามที่กฎหมายกำหนด</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >3.3.&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >หุ้นส่วนทางธุรกิจของเรา</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >เราอาจเปิดเผยข้อมูลของคุณแก่บริษัทต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ที่เราเป็นหุ้นส่วนด้วยเพื่อยื่นเสนอหรือโปรโมทสินค้าและบริการต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ให้กับลูกค้าของเราหรือกลุ่มลูกค้าที่คาดหวัง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ยกตัวอย่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หุ้นส่วนที่เป็นสถาบันการเงิน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บริษัทด้านโซลูชั่นการเข้าถึง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บริษัทด้านโทรคมนาคม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">สปอนเซอร์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หุ้นส่วนร่วมแบรนด์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และบุคคลที่สามอื่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ที่เราทำการตลาดและจับคู่สินค้าเพื่อส่งเสริมการขายร่วมกัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >3.4.&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >บุคคลที่สามตามที่กฎหมายกำหนด</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';">ในบางกรณี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราอาจจำเป็นต้องเปิดเผยข้อมูลส่วนบุคคลของคุณเพื่อเป็นการปฏิบัติตามข้อผูกพันทางกฎหมายและกฎระเบียบที่บังคับ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งรวมถึงหน่วยงานบังคับใช้กฎหมาย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ศาล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หน่วยงานกำกับดูแล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">หน่วยงานของรัฐ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือบุคคลที่สามอื่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ที่เราเห็นว่ามีความจำเป็นต้องปฏิบัติตามข้อผูกพันทางกฎหมายและกฎระเบียบที่ใช้บังคับ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือเพื่อเป็นการปกป้องสิทธิของเรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >สิทธิของบุคคลอื่นใด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือความปลอดภัยของบุคคลใด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">หรือเพื่อสืบหา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ป้องกัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือจัดการปัญหาการทุจริตฉ้อโกง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ปัญหาด้านความมั่นคงหรือปัญหาด้านความปลอดภัย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <a name="_9kR3WTr266467WV1qhvA1y4rq"
                    ><strong
                      ><span style="font-family:'DB Ozone X';"
                        >3.5.&nbsp;</span
                      ></strong
                    ></a
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ที่ปรึกษาด้านวิชาชีพ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >ประกอบด้วยผู้ให้บริการด้านการจัดการสินทรัพย์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">นิติกร</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ช่างเทคนิค</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และนักตรวจสอบบัญชีที่ให้ความช่วยเหลือในการดำเนินธุรกิจของเราและการป้องกันหรือนำมาซึ่งการเรียกร้องตามกฎหมาย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >3.6.&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ผู้รับมอบสิทธิและ</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';">/</span></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >หรือพันธะผูกพัน</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >ในกรณีที่มีการปรับโครงสร้างองค์กร</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การควบกิจการ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การโอนกิจการไม่ว่าทั้งหมดหรือบางส่วน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การขาย</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การซื้อ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">กิจการร่วมค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">การโอนสิทธิ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การถ่ายโอนหรือการมอบให้อย่างอื่นใดซึ่งส่วนใดส่วนหนึ่งหรือทั้งหมดของกิจการ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">สินทรัพย์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือหุ้นส่วนของเราหรือธุรกรรมอื่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ที่คล้ายคลึงกัน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บุคคลที่สามในฐานะผู้รับมอบสิทธิของเราจะปฏิบัติตามนโยบายความเป็นส่วนตัวฉบับนี้ด้วยความใส่ใจในข้อมูลส่วนบุคคลของคุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >4.&nbsp;</span
                    ></strong
                  ><strong
                      ><span style="font-family:'Angsana New';"
                        >การถ่ายโอนข้อมูลส่วนบุคคลของคุณไปยังต่างประเทศ</span
                      ></strong
                    >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                 <span style="font-family:'Angsana New';"
                      >เราอาจเปิดเผยหรือโอนข้อมูลส่วนบุคคลของคุณไปยังบุคคลที่สามหรือผู้ให้บริการที่ตั้งอยู่ในต่างประเทศ</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >ซึ่งประเทศปลายทางอาจมีหรือไม่มีมาตรฐานการด้านการคุ้มครองข้อมูลในลักษณะเดียวกัน</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เราจะดำเนินการตามขั้นตอนและมาตรการต่าง</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">ๆ</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เพื่อให้มั่นใจว่าข้อมูลส่วนบุคคลของคุณถูกถ่ายโอนอย่างปลอดภัย</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >และให้มั่นใจว่าฝ่ายที่ได้รับข้อมูลนั้นมีมาตรฐานการคุ้มครองข้อมูลที่เหมาะสมหรือข้อยกเว้นอื่น</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">ๆ</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >ตามที่กฎหมายอนุญาต</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';">ทั้งนี้</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >เราจะขอความยินยอมจากคุณเมื่อกฎหมายกำหนดว่าการถ่ายโอนข้อมูลข้ามแดนจำเป็นต้องได้รับความยินยอม</span
                    ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >5.&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ระยะเวลาในการเก็บรักษาข้อมูลส่วนบุคคลของคุณ</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >เราเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้เป็นเวลานานเท่าที่เราจำเป็นต้องใช้ข้อมูลส่วนบุคคลนั้นเพื่อดำเนินการให้บรรลุวัตถุประสงค์ของการเก็บรวบรวมข้อมูลนั้นมา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และเพื่อให้ตอบสนองต่อธุรกิจของเราและ</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >หรือพันธะผูกพันทางกฎหมายหรือระเบียบข้อบังคับ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การที่เราจะเก็บรักษาข้อมูลส่วนบุคคลของคุณไว้นานเท่าไหร่นั้นขึ้นอยู่กับลักษณะของข้อมูล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งข้อมูลบางอย่างอาจจำเป็นต้องเก็บรักษาไว้ยาวนานกว่า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เราจะกระทำการเช่นนั้นได้ต้องเป็นไปตามที่กฎหมายกำหนด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; page-break-after:avoid; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >6.&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >สิทธิของคุณในฐานะเจ้าของข้อมูลส่วนบุคคล</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >ภายใต้เงื่อนไขแห่งกฎหมายที่บังคับใช้และข้อยกเว้นแห่งกฎหมายนั้น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >คุณอาจมีสิทธิดังต่อไปนี้</span
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <ol
                  type="1"
                  class="awlist8"
                  style="margin:0pt; padding-left:0pt;"
                >
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';">การเข้าถึง</span
                    >:<span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >คุณอาจมีสิทธิในการเข้าถึงหรือร้องขอสำเนาข้อมูลส่วนบุคคลที่เราเก็บรวบรวม</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ใช้</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือเปิดเผยเกี่ยวกับคุณ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ทั้งนี้</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เพื่อความเป็นส่วนตัวและความปลอดภัยของตัวคุณเอง</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เราอาจจำเป็นต้องให้คุณพิสูจน์อัตลักษณ์บุคคลก่อนให้ข้อมูลที่มีการร้องขอมาแก่คุณ</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';">การแก้ไข</span>:
                    <span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >คุณอาจมีสิทธิขอให้มีการแก้ไขข้อมูลส่วนบุคคลที่เราเก็บรวบรวม</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ใช้</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือเปิดเผยเกี่ยวกับคุณ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ซึ่งเป็นข้อมูลที่ไม่สมบูรณ์</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ไม่ถูกต้อง</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ทำให้เกิดความเข้าใจผิด</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือไม่เป็นปัจจุบันได้</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การโอนย้ายข้อมูล</span
                    >:
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >คุณอาจมีสิทธิขอรับข้อมูลส่วนบุคคลที่เราถือครองอยู่เกี่ยวกับคุณได้ทั้งรูปแบบเชิงโครงสร้างและรูปแบบอิเล็กทรอนิกส์</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และมีสิทธิส่งหรือถ่ายโอนข้อมูลดังกล่าวให้กับผู้ดูแลข้อมูลอีกคนหนึ่งได้</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >โดยที่</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ก</span
                    ><span style="font-weight:normal;">)&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เป็นข้อมูลส่วนบุคคลที่คุณได้ให้ไว้กับเรา</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และ</span
                    ><span style="font-weight:normal;">&nbsp;(</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ข</span
                    ><span style="font-weight:normal;">)&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เราทำการประมวลผลข้อมูลดังกล่าวโดยอาศัยความยินยอมจากคุณหรือมีการทำสัญญากับคุณ</span
                    ><span style="font-weight:normal;">&nbsp;</span>
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';">การคัดค้าน</span
                    >:<span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >คุณมีสิทธิคัดค้านการเก็บรวบรวม</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >การใช้</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และการเปิดเผยซึ่งข้อมูลส่วนบุคคลของคุณได้</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เช่น</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >การคัดค้านการทำการตลาดทางตรง</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';">การยับยั้ง</span
                    >:<span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >คุณอาจมีสิทธิยับยั้งการใช้งานข้อมูลส่วนบุคคลของคุณในบางกรณี</span
                    ><span style="font-weight:normal;">&nbsp;</span>
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >การเพิกถอนความยินยอม</span
                    >:<span style="font-weight:normal;">&nbsp;</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >คุณมีสิทธิเพิกถอนความยินยอมในการเก็บรวมรวม</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ใช้</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือเปิดเผยข้อมูลส่วนบุคคลของคุณได้ทุกเมื่อ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เพื่อวัตถุประสงค์ที่คุณได้ให้ความยินยอมแก่เราในการเก็บรวบรวม</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ใช้</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และเปิดเผยข้อมูลส่วนบุคคลของคุณ</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';">การลบทิ้ง</span>:
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >คุณมีสิทธิขอให้เราลบทิ้งข้อมูลส่วนบุคคลของคุณที่เราเก็บรวบรวม</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ใช้</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และเปิดเผยเกี่ยวกับคุณหรือทำให้ข้อมูลส่วนบุคคลนั้นไม่สามารถระบุชี้ตัวบุคคลได้</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เว้นแต่เราไม่มีพันธะผูกพันที่ต้องกระทำการเช่นนั้นหากเราจำเป็นต้องเก็บรักษาข้อมูลนั้นไว้เพื่อปฏิบัติตามพันธะผูกพันตามกฎหมาย</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือเพื่อตั้งหลักฐาน</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ดำเนินการ</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >หรือป้องการการเรียกร้องทางกฎหมาย</span
                    >
                  </li>
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt; font-weight:bold;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"
                      >ยื่นข้อร้องเรียน</span
                    >:
                    <span style="font-family:'Angsana New'; font-weight:normal;"
                      >คุณอาจมีสิทธิยื่นข้อร้องเรียนต่อส่วนราชการที่มีอำนาจหน้าที่</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >เมื่อคุณมีเหตุอันเชื่อได้ว่าการที่เราเก็บรวบรวม</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >ใช้</span
                    ><span style="font-weight:normal;">&nbsp;</span
                    ><span
                      style="font-family:'Angsana New'; font-weight:normal;"
                      >และเปิดเผยข้อมูลส่วนบุคคลของคุณนั้นเป็นไปโดยไม่ชอบด้วยกฎหมายหรือไม่เป็นไปตามกฎหมายที่บังคับใช้ว่าด้วยการคุ้มครองข้อมูล</span
                    >
                  </li>
                </ol>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >7.&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >รายละเอียดการติดต่อของเรา</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >หากคุณต้องการติดต่อเราเพื่อใช้สิทธิอันเกี่ยวข้องกับข้อมูลส่วนบุคคลของคุณ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือหากคุณมีข้อสงสัยเกี่ยวกับข้อมูลส่วนบุคคลของคุณภายใต้นโยบายความเป็นส่วนตัวฉบับนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โปรดติดต่อเราหรือเจ้าหน้าที่คุ้มครองข้อมูลของเราได้ที่</span
                  ><span style="font-family:'DB Ozone X';">:</span>
                </p>
                <p
                  style="margin-top:0pt; margin-bottom:0pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
                <ol
                  type="1"
                  class="awlist9"
                  style="margin:0pt; padding-left:0pt;"
                >
                  <li
                    style="margin-left:36pt; text-indent:-18pt; line-height:normal; font-family:'DB Ozone X'; font-size:14pt;"
                  >
                    <span
                      style="width:5.55pt; font:7pt 'Times New Roman'; display:inline-block;"
                      >&nbsp; &nbsp;&nbsp;</span
                    ><span style="font-family:'Angsana New';"></span>
                    <span style="font-family:'Angsana New';"
                      >วันแบงค็อก</span
                    >
                    <span style="font-family:'Angsana New';"></span>
                  </li>
                </ol>
               
                <p
                  style="margin-top:8pt; margin-bottom:6pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'Angsana New';"
                      >นโยบายการใช้คุกกี้</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:6pt; margin-left:36pt; margin-bottom:6pt; text-indent:-36pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1.1&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลที่บริษัทรวบรวมผ่านทางเทคโนโลยีออนไลน์</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:6pt; margin-bottom:6pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';">บริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">บริษัทในเครือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">และบริษัทอื่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เช่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ให้บริการด้านเทคโนโลยี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และผู้ให้บริการวิเคราะห์เว็บจะใช้เทคโนโลยีต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ไม่ว่าจะเป็น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">คุกกี้</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(cookies)&nbsp;</span
                  ><span style="font-family:'Angsana New';">บีคอน</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(beacons)&nbsp;</span
                  ><span style="font-family:'Angsana New';">แท็ก</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(tags)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และพื้นที่จัดเก็บใน</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;local storage&nbsp;</span
                  ><span style="font-family:'Angsana New';">และบนคลาวด์</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(cloud)&nbsp;</span
                  ><span style="font-family:'Angsana New';">และสคริปต์</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(scripts)&nbsp;</span
                  ><span style="font-family:'Angsana New';">เป็นต้น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งเทคโนโลยีเหล่านี้จะช่วยให้ผู้ใช้บริการสามารถใช้เว็บไซต์ของบริษัทได้ง่ายขึ้น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งรวมถึงแอปพลิเคชันบนมือถือ</span
                  ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และช่วยบริษัทในการจัดการเนื้อหาบนเว็บไซต์ของบริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';"
                    >รวมถึงแอปพลิเคชันบนมือถือ</span
                  ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยจะนำมาใช้วิเคราะห์แนวโน้ม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บริหารจัดการเว็บไซต์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ติดตามความเคลื่อนไหวของผู้ใช้เว็บไซต์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;(</span
                  ><span style="font-family:'Angsana New';"
                    >รวมถึงเว็บไซต์อื่นและแอปพลิเคชันบนมือถือที่ผู้ใช้บริการคลิกเมื่อเข้ามาที่เว็บไซต์หรือแอปพลิเคชันบนมือถือของบริษัท</span
                  ><span style="font-family:'DB Ozone X';">)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และจะรวบรวมข้อมูลสถิติประชากรเกี่ยวกับฐานผู้ใช้ของบริษัท</span
                  >
                </p>
                <p
                  style="margin-top:6pt; margin-bottom:6pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1.2&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >ข้อมูลที่บริษัทรวบรวมโดยไม่ต้องขอความร่วมมือจากผู้ใช้บริการ</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:6pt; margin-bottom:6pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1.2.1&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >วัตถุประสงค์การใช้งาน</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:6pt; margin-bottom:6pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >ในกรณีที่เป็นการใช้เว็บไซต์ของบริษัทเพื่อวัตถุประสงค์ทางข้อมูล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บริษัทจะเก็บรวบรวมและใช้ข้อมูลการเข้าถึงที่อินเทอร์เน็ตเบราว์เซอร์ของผู้ใช้บริการส่งถึงบริษัทโดยอัตโนมัติ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยข้อมูลเหล่านั้นจะถูกจัดเก็บไว้ในไฟล์บันทึกของบริษัทบนเซิร์ฟเวอร์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งข้อมูลดังกล่าวจะเกี่ยวกับคำขอของลูกค้า</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >วันที่และเวลาของการดูหน้าเว็บ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ความสำเร็จในการเรียกเว็บเพจ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ปริมาณข้อมูลที่มีการถ่ายโอน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ประเภทและเวอร์ชันของเบราว์เซอร์ที่ผู้ใช้บริการใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ระบบปฏิบัติการที่ผู้ใช้บริการใช้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >รวมถึงข้อมูลเลขชุดอินเทอร์เน็ต</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(IP Address)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ที่ผู้ให้บริการกำหนดให้แก่ผู้ใช้บริการ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และหน้าเว็บที่ผู้ใช้บริการเข้าชมเว็บไซต์ของบริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ข้อมูลดังกล่าวมีความจำเป็นเชิงเทคนิคเพื่อการใช้งานเว็บไซต์ของบริษัทบนเว็บเซิร์ฟเวอร์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">นอกจากนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เป็นการสมควรที่จะจัดเก็บไฟล์บันทึกไว้ในระยะสั้นสำหรับการตรวจสอบความพยายามในการโจมตีบนเว็บเซิร์ฟเวอร์หรือการใช้งานในทางที่ผิดในภายหลัง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ด้วยเหตุนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บริษัทจึงมีฐานเพื่อประโยชน์โดยชอบด้วยกฎหมายในการประมวลผลข้อมูล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">กล่าวคือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อทำให้บริษัทสามารถให้บริการแก่ผู้ใช้บริการตามเงื่อนไขเหล่านี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">อนึ่ง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ข้อมูลส่วนบุคคลของผู้ใช้บริการจะถูกลบทิ้งหากไม่จำเป็นสำหรับวัตถุประสงค์นี้อีกต่อไป</span
                  >
                </p>
                <p
                  style="margin-top:6pt; margin-bottom:6pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'DB Ozone X';"
                      >1.2.1&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >คุกกี้</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:6pt; margin-bottom:6pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >บริษัทจะใช้คุกกี้บนเว็บไซต์ของบริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งคุกกี้เป็นไฟล์ข้อความที่เก็บไว้ในเบราว์เซอร์ของผู้ใช้บริการเมื่อผู้ใช้บริการเข้าชมเว็บไซต์ของบริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และจะเก็บรวบรวมข้อมูลเกี่ยวกับการเข้าใช้งานเว็บไซต์ของบริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ข้อมูลนี้จะช่วยให้บริษัทเข้าใจความต้องการของผู้ใช้และพฤติกรรมด้านเทคนิคของเว็บไซต์ของบริษัทได้ดีขึ้น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อที่บริษัทจะได้นำมาปรับปรุงเนื้อหา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ความสามารถในการให้บริการ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และความสามารถในการทำงานของเว็บไซต์โดยอาศัยข้อมูลดังกล่าว</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >คุกกี้จะไม่สร้างความเสียหายแก่คอมพิวเตอร์ของผู้ใช้บริการและไม่มีไวรัสใด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">อนึ่ง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >คุกกี้ที่บริษัทใช้ในเว็บไซต์เป็น</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;session cookies&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งจะถูกลบออกโดยอัตโนมัติเมื่อผู้ใช้บริการปิดเบราว์เซอร์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยคุกกี้ดังกล่าวจะสร้าง</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;session ID&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ให้แก่เบราว์เซอร์ของผู้ใช้บริการอันทำให้สามารถจับคู่การค้นหาด้วยเบราว์เซอร์ของผู้ใช้บริการกับการใช้งานได้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งเมื่อผู้ใช้บริการกลับมาเข้ามาใช้เว็บไซต์ของบริษัทแล้วจะทำให้เว็บไซต์สามารถจดจำผู้ใช้บริการได้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;session cookies&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >จะถูกลบออกเมื่อท่านปิดเบราว์เซอร์</span
                  >
                </p>
                <p
                  style="margin-top:6pt; margin-bottom:6pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"
                    >ผู้ใช้บริการมีสิทธิตั้งค่าเบราว์เซอร์ของตนเพื่อไม่ให้มีการจัดเก็บคุกกี้ในอุปกรณ์ของผู้ใช้บริการตั้งแต่แรก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือเพื่อให้คุกกี้ถูกลบออกเมื่อการใช้อินเทอร์เน็ตของผู้ใช้บริการสิ้นสุดลง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">อย่างไรก็ตาม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ในกรณีนี้บริษัทขอเรียนว่าผู้ใช้บริการจะไม่สามารถใช้บริการบางอย่างบนหน้าเว็บได้</span
                  >
                </p>
                <p
                  style="margin-top:6pt; margin-bottom:6pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >1.2.2&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family:'Angsana New';"
                      >บริการวิเคราะห์เว็บ</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:6pt; margin-bottom:6pt; line-height:normal; font-size:14pt;"
                >
                  <strong
                    ><span style="font-family:'DB Ozone X';"
                      >Google Universal Analytics</span
                    ></strong
                  >
                </p>
                <p
                  style="margin-top:6pt; margin-bottom:6pt; line-height:normal; font-size:14pt;"
                >
                  <span style="font-family:'Angsana New';"></span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">วันแบงค็อก</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"></span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ใช้บริการ</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google Universal Analytics&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งเป็นบริการวิเคราะห์เว็บของบริษัท</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google Inc.&nbsp;</span
                  ><span style="font-family:'Angsana New';">ตั้งอยู่ที่</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;1600&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >แอมพลิเธียเตอร์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">พาร์คเวย์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เมาน์เทนวิว</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">แคลิฟอร์เนีย</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;94043&nbsp;</span
                  ><span style="font-family:'Angsana New';">สหรัฐอเมริกา</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(&ldquo;Google&rdquo;)&nbsp;</span
                  ><span style="font-family:'Angsana New';">ซึ่ง</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google Universal Analytics&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >จะมีการใช้คุกกี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >การใช้คุกกี้จะช่วยให้สามารถกำหนดข้อมูล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เซสชัน</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(sessions)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และการโต้ตอบระหว่างอุปกรณ์ปลายทางกับหมายเลขผู้ใช้</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(User ID)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยการสร้างนามแฝง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และเพื่อวิเคราะห์พฤติกรรมการใช้งานของผู้ใช้บริการผ่านอุปกรณ์ต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยข้อมูลที่คุกกี้สร้างขึ้นจากการที่ผู้ใช้บริการใช้งานเว็บไซต์ของบริษัทนั้นจะถูกถ่ายโอนไปเก็บรักษาไว้ในเซิร์ฟเวอร์ของ</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ที่สหรัฐอเมริกา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">อย่างไรก็ตาม</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เนื่องจากมีการใช้</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;IP-Masking&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บนเว็บไซต์ของบริษัท</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google&nbsp;</span
                  ><span style="font-family:'Angsana New';">จะทำการย่อ</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;IP Address&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ของผู้ใช้บริการในรัฐสมาชิกของสหภาพยุโรป</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >หรือในรัฐอื่นที่ร่วมลงนามในข้อตกลงเขตเศรษฐกิจยุโรป</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และมีเฉพาะในกรณีพิเศษเท่านั้นที่</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;IP Address&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >แบบเต็มจะถูกย่อภายหลังจากโอนไปยังสหรัฐอเมริกา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ซึ่งในกรณีนี้</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ตกลงจะอยู่ภายใต้บังคับกรอบข้อตกลงการโอนข้อมูลระหว่างสหภาพยุโรปและสหรัฐอเมริกา</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;(EU-US Privacy Shield)&nbsp;</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;IP Address&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ที่เบราว์เซอร์ของผู้ใช้บริการส่งมายัง</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google Analytics&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >จะไม่ถูกนำไปรวมเข้ากับข้อมูลอื่นของ</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google&nbsp;</span
                  ><span style="font-family:'Angsana New';">โดย</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >จะใช้ข้อมูลที่ได้รับจากคุกกี้แทนบริษัทไปเพื่อวิเคราะห์การใช้งานเว็บไซต์ของบริษัท</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อรวบรวมรายงานเกี่ยวกับกิจกรรมของเว็บไซต์</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และเพื่อให้บริการเพิ่มเติมแก่บริษัทในส่วนที่เกี่ยวข้องกับการใช้เว็บไซต์และอินเทอร์เน็ต</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ด้วยเหตุนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บริษัทจึงมีฐานเพื่อประโยชน์โดยชอบด้วยกฎหมายในการประมวลผลข้อมูลด้วยการว่าจ้าง</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เป็นผู้ประมวลผลข้อมูล</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยบริษัทได้ทำสัญญากับ</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เพื่อให้ทำการประมวลผลข้อมูลตามมาตรา</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;28&nbsp;</span
                  ><span style="font-family:'Angsana New';">ของกฎหมาย</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;DSGVO&nbsp;</span
                  ><span style="font-family:'Angsana New';">หรือ</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;General Data Protection Regulation (GDPR)&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ซึ่งสัญญาดังกล่าวจะกำกับดูแลให้</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ประมวลผลข้อมูลส่วนบุคคลของผู้ใช้บริการแทนบริษัทเท่านั้น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >โดยจะดำเนินการตามคำสั่งของบริษัทอย่างเคร่งครัด</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และเป็นไปตามกฎหมายคุ้มครองข้อมูลส่วนบุคคลที่เกี่ยวข้อง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">อนึ่ง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ใช้บริการอาจห้ามไม่ให้มีการจัดเก็บคุกกี้ได้ด้วยการตั้งค่าในเบราว์เซอร์ของตน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">อย่างไรก็ดี</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บริษัทขอแจ้งให้ทราบว่าในกรณีดังกล่าว</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ใช้บริการจะไม่สามารถใช้ฟังก์ชันบางอย่างของเว็บไซต์ได้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">นอกจากนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ใช้บริการสามารถห้ามไม่ให้</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เก็บรวบรวมและประมวลผลข้อมูลที่ระบุไว้ก่อนหน้านี้โดยสามารถดาวน์โหลดและติดตั้งปลั๊กอินของเบราว์เซอร์ได้</span
                  ><u
                    ><span style="font-family:'Angsana New'; color:#ffc619;"
                      >ที่นี่</span
                    ></u
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >และผู้ใช้บริการสามารถขอปิดการใช้งานได้โดยการติดตั้งระบบที่ผู้ใช้บริการห้ามไม่ให้</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >เก็บรวบรวมข้อมูลซึ่งจะมีประโยชน์โดยเฉพาะในกรณีที่</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;deactivation add-on&nbsp;</span
                  ><span style="font-family:'Angsana New';">ไม่ทำงาน</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">เช่น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >บนอุปกรณ์มือถือ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ในกรณีที่ผู้ใช้บริการใช้เว็บไซต์ของบริษัทกับเบราว์เซอร์</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >อุปกรณ์ปลายทางต่าง</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ๆ</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ใช้บริการจำเป็นต้องปฏิบัติตามขั้นตอนที่อธิบายไว้สำหรับเบราว์เซอร์</span
                  ><span style="font-family:'DB Ozone X';">/</span
                  ><span style="font-family:'Angsana New';"
                    >อุปกรณ์ปลายทางทั้งหมดนั้น</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';">ทั้งนี้</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ผู้ใช้บริการสามารถศึกษาข้อมูลเพิ่มเติมเกี่ยวกับการคุ้มครองข้อมูลด้วยการใช้</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google Universal Analytics&nbsp;</span
                  ><span style="font-family:'Angsana New';">ได้ที่</span
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><a
                    href="https://support.google.com/analytics/answer/2838718?hl=en&ref_topic=6010376"
                    style="text-decoration:none;"
                    ><u
                      ><span style="font-family:'DB Ozone X'; color:#0000ff;"
                        >https://support.google.com/analytics/answer/2838718?hl=en&amp;ref_topic=6010376</span
                      ></u
                    ></a
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >นอกจากนี้ผู้ใช้บริการสามารถศึกษาข้อมูลเพิ่มเติมเกี่ยวกับการคุ้มครองข้อมูลของตนด้วยการใช้บริการของ</span
                  ><span style="font-family:'DB Ozone X';"
                    >&nbsp;Google&nbsp;</span
                  ><span style="font-family:'Angsana New';"
                    >ได้ที่ลิงค์ต่อไปนี้</span
                  ><span style="font-family:'DB Ozone X';">:</span>
                </p>
                <p
                  style="margin-top:6pt; margin-bottom:8pt; line-height:108%; font-size:14pt;"
                >
                  <a
                    href="http://www.google.com/analytics/terms/th.html"
                    style="text-decoration:none;"
                    ><u
                      ><span style="font-family:'DB Ozone X'; color:#0000ff;"
                        >http://www.google.com/analytics/terms/th.html</span
                      ></u
                    ></a
                  ><span style="font-family:'DB Ozone X';">&nbsp;</span><br /><a
                    href="https://policies.google.com"
                    style="text-decoration:none;"
                    ><u
                      ><span style="font-family:'DB Ozone X'; color:#0000ff;"
                        >https://policies.google.com</span
                      ></u
                    ></a
                  >
                </p>
                <p style="margin-top:8pt; margin-bottom:8pt;">
                  <span style="font-family:'DB Ozone X';">&nbsp;</span>
                </p>
              </div>
              <div v-if="$i18n.locale == 'en'">
                <h2><span>Privacy Policy</span></h2>
                <p><span>&nbsp;</span></p>
                <p>
                  <span>One Bangkok  (the “</span
                  ><strong><span>Company</span></strong
                  ><span>,” “</span><strong><span>we</span></strong
                  ><span>,” “</span><strong><span>us</span></strong
                  ><span>,” or “</span><strong><span>our</span></strong
                  ><span
                    >”) commits to safeguard your Personal Data (as defined
                    below). We know you care how information about you is
                    collected, used, disclosed, and/or transferred outside of
                    Thailand. The information you share with us allows us to
                    provide the products and services you need and want
                    appropriately tailored for you, not only from us, but also
                    those within One Bangkok Group (as defined below). We
                    appreciate your trust that we will carefully and sensibly
                    handle your Personal Data while giving you the personalized
                    experience and customer services from us.&nbsp;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <span>This Privacy Notice (“</span
                  ><strong><span>Notice</span></strong
                  ><span
                    >”) explains the collection, use, disclosure and transfer of
                    Personal Data (as defined below) and the data protection
                    rights of individuals outside our organization with whom we
                    interact and whose Personal Data (as defined below) we
                    handle in the course of our businesses or in connection with
                    the products and services we provide, including: (i)
                    individual customers; (ii) contact persons, employees,
                    personnel, authorized persons, representatives, agents,
                    directors, shareholders or any persons, who have the power
                    to establish business relationship or engage in a
                    transaction on behalf of our) corporate customers and their
                    affiliates; (iii) users and visitors of our websites; (iv)
                    other recipients of our products and services; and (v) any
                    other individuals about whom we obtain Personal Data (as
                    defined below) (together, “</span
                  ><strong><span>you</span></strong
                  ><span>” or “</span><strong><span>your</span></strong
                  ><span
                    >”). This Privacy Policy also applies to our websites,
                    mobile applications, social networking sites, online
                    communication channels, events and activities, and other
                    locations where we collect your Personal Data. However,
                    please read this Privacy Policy in conjunction with the
                    terms and conditions of particular service that you use,
                    which may set out separately regarding the personal
                    information we collect about you.</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >We may review and amend this Privacy Policy from time to
                    time to reflect changes in applicable laws and the way we
                    handle Personal Data. You are encouraged to revisit our
                    Privacy Policy from time to time to keep yourself updated on
                    these changes. Any changes to this Privacy Policy will
                    become effective when we post the revised Privacy Policy on
                    our website, application or other communication channels. We
                    will provide additional notice of significant updates.</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h2><span>1. What Personal Data we collect</span></h2>
                <p><span>&nbsp;</span></p>
                <p>
                  <span>"</span><strong><span>Personal Data</span></strong
                  ><span>"&nbsp;</span
                  ><span
                    >means any identified or identifiable information about you
                    as listed below</span
                  ><span>.&nbsp;</span
                  ><span
                    >In order to offer you with our products and services, we
                    may collect Personal Data directly&nbsp;</span
                  ><span>(</span><span>e</span><span>.</span><span>g</span
                  ><span>.&nbsp;</span
                  ><span
                    >through our representatives, officers, [relationship
                    manager], salesperson, staff, call center, application</span
                  ><span>)&nbsp;</span
                  ><span>or indirectly from you or other sources&nbsp;</span
                  ><span>(</span><span>e</span><span>.</span><span>g</span
                  ><span>.&nbsp;</span><span>social media, third party</span
                  ><span>’</span
                  ><span
                    >s online platforms, and other publicly available
                    sources</span
                  ><span>)&nbsp;</span
                  ><span
                    >or through our parent company, affiliates, subsidiaries,
                    business partners, official authorities, or third parties.
                    The specific type of data collected will depend on the
                    context of your interactions with us, and the services or
                    products you need or want from us and within One Bangkok
                    Group</span
                  ><em><span>.</span></em
                  ><span>&nbsp;</span>
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <span>"</span><strong><span>Sensitive Data</span></strong
                  ><span>"&nbsp;</span
                  ><span
                    >means Personal Data classified by law as sensitive
                    data</span
                  ><span>.&nbsp;</span
                  ><span>We will only collect, use, disclose and</span
                  ><span>/</span><span>or cross</span><span>-</span
                  ><span
                    >border transfer Sensitive Data if we have received your
                    explicit consent or as permitted by law</span
                  ><span>.</span>
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >The following Personal Data is categorized under the
                    variety nature of businesses of One Bangkok Group.</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h3><span>1.1. Commercial building</span></h3>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <ol type="1">
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Personal details,<span
                      >&nbsp;such as title, full name, gender, age, nationality,
                      date of birth, job title, position, workplace, work
                      history, information on government-issued cards, issuing
                      and expiry date (e.g., national identification number,
                      passport number), information on house registration, work
                      permit, license plate number, photograph, your hobbies and
                      interests;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Contact details,<span
                      >&nbsp;such as postal address, telephone number, location
                      data, email address, LINE ID, WhatsApp ID, WeChat ID,
                      Facebook account;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Financial details<span
                      >, such as income, salary, bank account details (e.g.,
                      bank account number, bank name, branch, account type), and
                      other financial related information;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Sensitive data,
                    <span
                      >such as sensitive data as shown in the identification
                      document (e.g., religion, racial or ethnic origin), health
                      data, biometric data (e.g. fingerprints, facial
                      recognition, retinal scans).</span
                    ><span>.</span>
                  </li>
                </ol>
                <p><span>&nbsp;</span></p>
                <h3><span>1.2. Department store</span></h3>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <ol type="1">
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Personal details,<span
                      >&nbsp;such as title, full name, gender, age, nationality,
                      date of birth, job title, position, workplace, work
                      history, information on government-issued cards, issuing
                      and expiry date (e.g., national identification number,
                      passport number), information on house registration, work
                      permit, license plate number, photograph;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Contact details,<span
                      >&nbsp;such as postal address, telephone number, location
                      data, email address, LINE ID, WhatsApp ID, WeChat ID,
                      Facebook account, QR code;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Financial details<span
                      >, such as income, salary, bank account details (e.g.,
                      bank account number, bank name, branch, account
                      type),&nbsp;</span
                    ><span>&nbsp;</span
                    ><span>and other financial related information;</span>
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Transaction details,<span
                      >&nbsp;such as details about payment to and from you,
                      payment date and/or time, payment amount and method,
                      details about redemption transaction, date and location of
                      purchase;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Technical details,<span
                      >&nbsp;such as Internet Protocol (IP) address, Mac
                      address;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Behaviour details<span
                      >, such as information about your behavior, lifestyle,
                      hobbies, interests, attitudes and convictions and
                      interaction data;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Profile details,
                    <span>such as application membership number;</span>
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Other
                    persons information:<span>&nbsp;name of parents</span>
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Sensitive data,
                    <span
                      >such as sensitive data as shown in the identification
                      document (e.g., religion, racial or ethnic origin), health
                      data, disability, biometric data (e.g. fingerprints,
                      facial recognition, retinal scans), criminal
                      records.</span
                    >
                  </li>
                </ol>
                <p><span>&nbsp;</span></p>
                <h3><span>1.3. Co-working</span></h3>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <ol type="1">
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Personal details,<span
                      >&nbsp;such as title, full name, gender, age, nationality,
                      date of birth, job title, position, workplace, work
                      history, educational background, language preference,
                      information on government-issued cards (e.g., national
                      identification number and valid date, passport number,
                      driver's license details), student ID number and valid
                      date, information on house registration,&nbsp;</span
                    ><span>&nbsp;</span
                    ><span
                      >photograph, video footage, sound recording, geolocation
                      data;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Contact details,<span
                      >&nbsp;such as postal address, billing address, telephone
                      number, email address, social media accounts;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Financial details<span
                      >, such as income, bank account details, payment details,
                      credit/debit card details&nbsp;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Behaviour details<span
                      >, such as information about your behavior, lifestyle,
                      attitudes and convictions and interaction data;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Profile details,
                    <span
                      >such as access card ID, username, display name, password,
                      user preferences;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Sensitive data,
                    <span
                      >such as sensitive data as shown in the identification
                      document (e.g., religion, racial or ethnic origin), health
                      data, disability and biometric data (e.g. fingerprints,
                      facial recognition, retinal scans).</span
                    >
                  </li>
                </ol>
                <p><span>&nbsp;</span></p>
                <p><span>&nbsp;</span></p>
                <p><span>&nbsp;</span></p>
                <h3><span>1.4. Retails</span></h3>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <ol type="1">
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Personal details,<span
                      >&nbsp;such as title, full name, gender, age, nationality,
                      date of birth, information on government-issued cards
                      (e.g., national identification number, passport number)
                      information on house registration;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Contact details,<span
                      >&nbsp;such as postal address, telephone number, email
                      address, LINE ID;&nbsp;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Financial details<span
                      >, such as income, income range, bank account details,
                      payment details, credit/debit card details, and other
                      financial related information;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Transaction details,<span
                      >&nbsp;such as details about payment to and from you,
                      payment date and/or time, payment amount and method,
                      details about redemption transaction, date and location of
                      purchase;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Behaviour details<span
                      >, such as information about your behavior, interests,
                      hobbies, lifestyle, attitudes and convictions and
                      interaction data;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Sensitive data,
                    <span
                      >such as sensitive data as shown in the identification
                      document (e.g., religion, racial or ethnic origin)</span
                    >
                  </li>
                </ol>
                <p><span>&nbsp;</span></p>
                <h3>
                  <span>1.5</span><span>&nbsp;&nbsp;</span
                  ><span>Software Application</span>
                </h3>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <ol type="1">
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Personal details,<span
                      >&nbsp;such as title, full name, gender, age, nationality,
                      date of birth, information on government-issued cards
                      (e.g., national identification number, passport number)
                      information on house registration,;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Contact details,<span
                      >&nbsp;such as postal address, telephone number, email
                      address, LINE ID;&nbsp;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Financial details<span
                      >, such as income, income range, bank account details,
                      payment details, credit/debit card details, and other
                      financial related information;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Transaction details,<span
                      >&nbsp;such as details about payment to and from you,
                      payment date and/or time, payment amount and method,
                      details about redemption transaction, date and location of
                      purchase;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Behaviour details<span
                      >, such as information about your behavior, interests,
                      hobbies, lifestyle, attitudes and convictions and
                      interaction data;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Sensitive data,
                    <span
                      >such as sensitive data as shown in the identification
                      document (e.g., religion, racial or ethnic origin)</span
                    >
                  </li>
                </ol>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >Where applicable, we may also collect other information,
                    such as cookies, and internet browsing behaviour, login
                    data, search history browsing type, browsing language, IP
                    address, information about how you use and interact with our
                    online services or advertising (including web page viewed,
                    content viewed, links clicked and features used), when and
                    how often you use our online services, the webpage from
                    which you clicked a link to come to our online services
                    (e.g., the referrer URL), and crash reports. If it is
                    possible to combine any information with your personal
                    information, or if other information is used to build a
                    profile of an individual, we will treat such other
                    information and combined information as personal data.
                    Nevertheless, subject to our Cookies Policy, you can reject
                    or delete cookies at any time in your web browser’s privacy
                    setting. You can choose to reject cookies either in whole or
                    in part. By using the website without deleting or rejecting,
                    you agree to our use of cookies and store on your device.
                    You can review our&nbsp;</span
                  ><a href="#_Cookies_Policy"
                    ><u><span>Cookies Policy here</span></u></a
                  ><span>&nbsp;</span>
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >If you provide Personal Data of any third party to us,
                    e.g., their name, family name, address details, and
                    telephone number for emergency contact, family member
                    income; please provide this Privacy Policy for their
                    acknowledgement and/or obtaining consents where
                    applicable.</span
                  ><span>&nbsp;&nbsp;</span>
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >We will only collect, use, or disclose sensitive data on
                    the basis of your explicit consent or where permitted by
                    law.</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >We only collect the information of children,
                    quasi-incompetent persons, and incompetent persons where
                    their parent or guardian has given their consent. We do not
                    knowingly collect information from customers under the age
                    of 20 without their parental consent when it is required, or
                    from quasi-incompetent persons and incompetent persons
                    without their legal guardian's consent. In the event we
                    learn that we have unintentionally collected personal
                    information from anyone under the age of 20 without parental
                    consent when it is required, or from quasi-incompetent
                    persons and incompetent persons without their legal
                    guardians, we will delete it immediately or process only if
                    we can rely on other legal bases apart from consent.</span
                  ><span>&nbsp;&nbsp;</span>
                </p>
                <p><span>&nbsp;</span></p>
                <h2>
                  <span
                    >2. The Purpose of collection, use or disclosure of your
                    Personal Data&nbsp;</span
                  >
                </h2>
                <p><span>&nbsp;</span></p>
                <p>
                  <span>We may collect, use, disclose and</span><span>/</span
                  ><span>or cross</span><span>-</span
                  ><span
                    >border transfer your Personal Data and Sensitive Data for
                    the following purposes</span
                  ><span>.</span>
                </p>
                <p><span>&nbsp;</span></p>
                <h3><span>2.1. Purpose for which consent is required</span></h3>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <span
                    >We rely on your consent for the following purposes:</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p><span>&nbsp;</span></p>
                <h4><span>2.1.1. Commercial building</span></h4>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong><span>1)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong><span>Marketing and Communications:</span></strong
                  ><span
                    >&nbsp;To provide marketing communications, sales, special
                    offers, promotions, notices, news, and information about
                    products and services from us, One Bangkok Group, our
                    affiliates, subsidiaries, third parties and/or business
                    partners which we cannot rely on other legal bases;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong><span>2)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong><span>Analytic services:&nbsp;</span></strong
                  ><span
                    >To conduct data analytic services on your personal data
                    within One Bangkok Group, our affiliates, subsidiaries, or
                    to third parties;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>3)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong><span>Sensitive Data</span></strong
                  ><span
                    >: We may use your sensitive data for the following
                    purposes:</span
                  >
                </p>
                <ul type="disc">
                  <li>
                    <span
                      >Sensitive data as shown in the identification document
                      (e.g., religion, racial or ethnic origin): for
                      verification and authentication purpose;</span
                    >
                  </li>
                  <li>
                    <span
                      >Health data and disability for coordinating with medical
                      service providers;</span
                    >
                  </li>
                  <li>
                    <span
                      >Biometric data (e.g. fingerprints, facial recognition,
                      retinal scans) for providing access our premises, security
                      purposes and providing elevator access control
                      system.</span
                    >
                  </li>
                </ul>
                <p><span>&nbsp;</span></p>
                <h4><span>2.1.2. Department store</span></h4>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>1)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong><span>Marketing and Communications:</span></strong
                  ><span
                    >&nbsp;To provide marketing communications, sales, special
                    offers, promotions, notices, news, and information about
                    products and services from us,&nbsp;</span
                  ><a name="_Hlk66118305"><span>One Bangkok Group</span></a
                  ><span
                    >, our affiliates, subsidiaries, third parties and/or
                    business partners which we cannot rely on other legal
                    bases;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>2)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong><span>Analytic services:&nbsp;</span></strong
                  ><span
                    >To conduct data analytic services on your personal data
                    within One Bangkok Group, our affiliates, subsidiaries, or
                    to third parties;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong><span>3)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong><span>Sensitive Data</span></strong
                  ><span
                    >: We may use your sensitive data for the following
                    purposes:</span
                  >
                </p>
                <ul type="disc">
                  <li>
                    <span
                      >Sensitive data as shown in the identification document
                      (e.g., religion, racial or ethnic origin): for
                      verification and authentication purpose;</span
                    >
                  </li>
                  <li>
                    <span
                      >Biometric data (e.g. fingerprints, facial recognition,
                      retinal scans) for accessing premises and security
                      purpose;&nbsp;</span
                    >
                  </li>
                  <li>
                    <span
                      >Health data and disability for coordinating with medical
                      service providers;</span
                    >
                  </li>
                  <li><span>Criminal records: for security purpose.</span></li>
                </ul>
                <p><span>&nbsp;</span></p>
                <h4><span>2.1.3. Co-working</span></h4>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong><span>1)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong
                    ><span>Marketing and Communications:&nbsp;</span></strong
                  ><span
                    >To provide marketing communications, sales, special offers,
                    promotions, notices, news, events and information about
                    products and services from us, One Bangkok Group, our
                    affiliates, subsidiaries, third parties and/or business
                    partners which we cannot rely on other legal bases;
                    and/or</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>2)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong><span>Sensitive Data:&nbsp;</span></strong
                  ><span
                    >We may use your sensitive data for the following
                    purposes:</span
                  >
                </p>
                <ul type="disc">
                  <li>
                    <span
                      >Sensitive data as shown in the identification document
                      (e.g., religion, racial or ethnic origin): for
                      verification and authentication purpose;</span
                    >
                  </li>
                  <li>
                    <span
                      >Biometric data (e.g. fingerprints, facial recognition,
                      retinal scans) for accessing premises and security
                      purpose;</span
                    >
                  </li>
                  <li>
                    <span
                      >Health data and disability for coordinating with medical
                      service providers.</span
                    >
                  </li>
                </ul>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <h4><span>2.1.4. Retails</span></h4>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong><span>1)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong
                    ><span>Marketing and Communications:&nbsp;</span></strong
                  ><span
                    >To provide marketing communications, sales, special offers,
                    promotions, notices, news, events and information about
                    products and services from us, One Bangkok Group, our
                    affiliates, subsidiaries, third parties and/or business
                    partners which we cannot rely on other legal bases;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>2)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong><span>Analytic services:&nbsp;</span></strong
                  ><span
                    >To conduct analytic services on your personal data within
                    One Bangkok Group, our affiliates, subsidiaries, or to
                    third parties; and/or</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong><span>3)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong><span>Sensitive Data</span></strong
                  ><span
                    >: We may use your sensitive data for the following
                    purposes:</span
                  >
                </p>
                <ul type="disc">
                  <li>
                    <span
                      >Sensitive data as shown in the identification document
                      (e.g., religion, racial or ethnic origin): for
                      verification and authentication purpose.</span
                    >
                  </li>
                  <li>
                    <span
                      >Biometric data (e.g. fingerprints, facial recognition,
                      retinal scans) for accessing premises and security
                      purpose;</span
                    >
                  </li>
                  <li>
                    <span
                      >Health data and disability for coordinating with medical
                      service providers.</span
                    >
                  </li>
                </ul>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <h4><span>2.1.5. Software Application</span></h4>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>1)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong
                    ><span>Marketing and Communications:&nbsp;</span></strong
                  ><span
                    >To provide marketing communications, sales, special offers,
                    promotions, notices, news, events and information about
                    products and services from us, One Bangkok Group, our
                    affiliates, subsidiaries, third parties and/or business
                    partners which we cannot rely on other legal bases;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>2)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong><span>Analytic services:&nbsp;</span></strong
                  ><span
                    >To conduct analytic services on your personal data within
                    One Bangkok Group, our affiliates, subsidiaries, or to
                    third parties; and/or</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong><span>3)&nbsp;</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong><span>Sensitive Data</span></strong
                  ><span
                    >: We may use your sensitive data for the following
                    purposes:</span
                  >
                </p>
                <ul type="disc">
                  <li>
                    <span
                      >Sensitive data as shown in the identification document
                      (e.g., religion, racial or ethnic origin): for
                      verification and authentication purpose.</span
                    >
                  </li>
                  <li>
                    <span
                      >Biometric data (e.g. fingerprints, facial recognition,
                      retinal scans) for accessing premises and security
                      purpose;</span
                    >
                  </li>
                  <li>
                    <span
                      >Health data and disability for coordinating with medical
                      service providers.</span
                    >
                  </li>
                </ul>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >Where legal basis is consent, you have the right to
                    withdraw your consent at any time</span
                  ><span>.&nbsp;</span
                  ><span
                    >This can be done so, by contacting us at the Contact
                    Details below</span
                  ><span>.&nbsp;</span
                  ><span
                    >The withdrawal of consent will not affect the lawfulness of
                    the collection, use, and disclosure of your Personal Data
                    and Sensitive Data based on your consent before it was
                    withdrawn</span
                  ><span>.</span>
                </p>
                <p><span>&nbsp;</span></p>
                <h3>
                  <span
                    >2.2. The purposes we may rely on and other legal grounds
                    for processing your Personal Data</span
                  >
                </h3>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <span
                    >We may also rely on (1) contractual basis, for our
                    initiation or fulfilment of a contract with you; (2) legal
                    obligation, for the fulfilment of our legal obligations; (3)
                    legitimate interest, for the purpose of our legitimate
                    interests and the legitimate interests of third parties; (4)
                    vital interest, for preventing or suppressing a danger to a
                    person’s life, body, or health; and/or (5) public interest,
                    for the performance of a task carried out in the public
                    interest or for the exercising of official
                    authorities.</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <h4>
                  <span>2.2.1.&nbsp;</span><span>Commercial building</span>
                </h4>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >We may collect, use, and/or disclose your Personal Data for
                    the following purposes:</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >1) To provide products and services to you:</span
                    ></strong
                  ><span
                    >&nbsp;To enter into a contract and manage our contractual
                    relationship with you; to carry out contract details,
                    financial transaction and services related to the payments
                    including transaction checks, verification, and
                    cancellation; to make appointment of sales gallery visit; to
                    process on receipt and invoice issuance, cash disbursement,
                    account payable, and proof of purchase; to keep evidence
                    records; to manage the use of access card; and to invite you
                    to participate in events and our services, to organize
                    events, place and other services for you;</span
                  >
                </p>
                <p>
                  <strong><span>2) Marketing and Communications:</span></strong
                  ><span
                    >&nbsp;To provide marketing, communications, special offers,
                    privilege, promotions, notices, news, events information
                    about products and services from us, One Bangkok Group, our
                    affiliates, subsidiaries and/or business partners in
                    accordance with preferences you have expressed directly or
                    indirectly;&nbsp;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >3) Prize drawing, competitions, and other
                      offers/promotions:</span
                    ></strong
                  ><span
                    >&nbsp;To allow you to participate to promotions, special
                    offers, competitions, prize drawing, privilege on such using
                    exclusive spaces, and other offers/promotions;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >4) Registration and Authentication:&nbsp;</span
                    ></strong
                  ><span
                    >To register, verify, identify, and authenticate you or your
                    identity;&nbsp;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >5) To communicate and manage our relationship with
                      you:&nbsp;</span
                    ></strong
                  ><span
                    >To communicate with you in relation to the products and
                    services you obtain from us and receive information about
                    the products and services from you; to process and update
                    your information</span
                  ><span
                    >; to facilitate your use of the products and services; to
                    handle customer service-related queries, request, feedback,
                    complains, warranty claims, disputes or indemnity; to deal
                    with technical issues and commercial terms</span
                  ><span>;&nbsp;</span>
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong
                    ><span
                      >6) To process transactions and or payments:</span
                    ></strong
                  ><span
                    >&nbsp;such as to process payments or transactions, billing,
                    processing, clearing, refunding, or reconciliation
                    activities. This includes all financial, transaction or
                    payment related record keeping, issuance of bills, tax
                    invoice, payment receipts and delivery of such;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>7) Profiling and data analytics:</span></strong
                  ><span
                    >&nbsp;to undertake data analytics for products and services
                    development, market research, surveys, assessments, and
                    behaviour; to perform data analytic to improve our marketing
                    performances and the offerings and sales of our products and
                    services;&nbsp;</span
                  ><span>to evaluate your interest on the solutions;</span
                  ><span
                    >&nbsp;to perform data analytic for system improvement (e.g.
                    develop model classifying customer group for better service
                    provision); to perform data analytic to increase business
                    opportunity; t</span
                  ><span
                    >o evaluate, develop, manage, improve, research and develop
                    the services, products, system, and business operations for
                    you and all of our customers</span
                  ><span>;&nbsp;</span>
                </p>
                <p>
                  <strong
                    ><span
                      >8) Carrying out business purposes:&nbsp;</span
                    ></strong
                  ><span>&nbsp;</span
                  ><span
                    >such as to update your customer data; to maintain data
                    accuracy; to perform data analytic for risk prevention (e.g.
                    develop a model to predict the possibility of non-performing
                    loan, or predict the chances of accident); to perform
                    customer risk assessments; to perform institutional risk
                    control, auditing and audit record keeping, analyzing credit
                    risk; to keep business records and otherwise to operate,
                    manage, and maintain our business operations; to maintain
                    our IT operations, management of communication system,
                    operation of IT security and IT security audit; and to
                    maintain internal business management for internal
                    compliance requirements, policies, and procedures; to keep
                    record of the frequency of visits;</span
                  >
                </p>
                <p>
                  <strong
                    ><span
                      >9) Compliance with regulatory and compliance
                      obligations:&nbsp;</span
                    ></strong
                  ><span
                    >To comply with legal obligations, legal proceedings, or
                    government authorities' orders which can include orders from
                    government authorities outside Thailand, and/or cooperate
                    with court, regulators, government authorities, and law
                    enforcement bodies when we reasonably believe we are legally
                    required to do so, and when disclosing your Personal Data is
                    strictly necessary to comply with the said legal
                    obligations, proceedings, or government orders; to provide
                    and handle tax declaration; to contact with tax authorities,
                    financial service regulators, and other regulatory and
                    governmental bodies, and investigating or preventing
                    crime;</span
                  >
                </p>
                <p>
                  <strong
                    ><span
                      >10) Functioning of our sites and platform:&nbsp;</span
                    ></strong
                  ><span
                    >such as to administer, operate, track, monitor, and manage
                    our sites and platform to facilitate and ensure that they
                    function properly, efficiently, and securely; to facilitate
                    your experience on our sites and platform; improve the
                    layout and content of our sites and platform; to allow you
                    to access our available systems and provide technical
                    assistance</span
                  >
                </p>
                <p>
                  <strong><span>11) Protection of our interests:</span></strong
                  ><span
                    >&nbsp;To protect the security and integrity of our
                    business; to detect and prevent misconduct within our
                    premises, for example, to detect, prevent, and respond to
                    fraud claims, and to determine fraud risk and identify
                    fraudulent transactions, intellectual property infringement
                    claims, or violations of law; to manage and prevent loss of
                    our assets and property; to perform sanction list checking,
                    risk management, internal audits and records, asset
                    management, system, and other business controls; to follow
                    up on incidents; to prevent and report criminal offences and
                    to protect the security and integrity of our business; for
                    reference and evidence related to claims or
                    litigation;</span
                  >
                </p>
                <p>
                  <strong><span>12) Corporate transaction</span></strong
                  ><span
                    >: in the event of sale, transfer, merger, reorganization,
                    or similar event we may transfer your information to one or
                    more third parties as part of that transaction;</span
                  >
                </p>
                <p>
                  <strong><span>13)</span></strong
                  ><span>&nbsp;</span><strong><span>Life</span></strong
                  ><span
                    >: To prevent or suppress a danger to a person’s life, body,
                    or health.</span
                  >
                </p>
                <p>
                  <span
                    >If you fail to provide your Personal Data when requested,
                    we may not be able to provide our products and services to
                    you.&nbsp;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h4><span>2.2.2.&nbsp;</span><span>Department store</span></h4>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >We may collect, use, and/or disclose your Personal Data for
                    the following purposes:</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong
                    ><span
                      >1) To provide products and services to you:</span
                    ></strong
                  ><span
                    >&nbsp;To enter into a contract and manage our contractual
                    relationship with you; to carry out contract details,
                    financial transaction and services related to the payments
                    including transaction checks, verification, and
                    cancellation; to process on receipt and invoice issuance,
                    cash disbursement, account payable, and proof of purchase;
                    to keep evidence records; to process on redemption
                    programme; and to invite you to participate in events and
                    our services, to organize events, place and other services
                    for you;</span
                  >
                </p>
                <p>
                  <strong><span>2) Marketing and Communications:</span></strong
                  ><span
                    >&nbsp;To provide marketing, communications, special offers,
                    privilege, promotions, notices, news, events information
                    about products and services from us, One Bangkok Group, our
                    affiliates, subsidiaries and/or business partners in
                    accordance with preferences you have expressed directly or
                    indirectly;&nbsp;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >3) Prize drawing, competitions, and other
                      offers/promotions:</span
                    ></strong
                  ><span
                    >&nbsp;To allow you to participate to promotions, special
                    offers, competitions, prize drawing, privilege on such using
                    exclusive spaces, and other offers/promotions;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >4) Registration and Authentication:&nbsp;</span
                    ></strong
                  ><span
                    >To register, verify, identify, and authenticate you or your
                    identity;&nbsp;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >5) To communicate and manage our relationship with
                      you:&nbsp;</span
                    ></strong
                  ><span
                    >To communicate with you in relation to the products and
                    services you obtain from us and receive information about
                    the products and services from you; to process and update
                    your information</span
                  ><span
                    >; to facilitate your use of the products and services; to
                    handle customer service-related queries, request, feedback,
                    complains, warranty claims, disputes or indemnity; to deal
                    with technical issues and commercial terms</span
                  ><span>;&nbsp;</span>
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong
                    ><span
                      >6) To process transactions and or payments:</span
                    ></strong
                  ><span
                    >&nbsp;such as to process payments or transactions, billing,
                    processing, clearing, refunding, or reconciliation
                    activities. This includes all financial, transaction or
                    payment related record keeping, issuance of bills, tax
                    invoice, payment receipts and delivery of such;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>7) Profiling and data analytics:</span></strong
                  ><span
                    >&nbsp;to undertake data analytics for products and services
                    development, market research, surveys, assessments, and
                    behaviour; to perform data analytic to improve our marketing
                    performances and the offerings and sales of our products and
                    services;&nbsp;</span
                  ><span>to evaluate your interest on the solutions;</span
                  ><span
                    >&nbsp;to perform data analytic for system improvement (e.g.
                    develop model classifying customer group for better service
                    provision); to perform data analytic to increase business
                    opportunity; t</span
                  ><span
                    >o evaluate, develop, manage, improve, research and develop
                    the services, products, system, and business operations for
                    you and all of our customers</span
                  ><span>;&nbsp;</span>
                </p>
                <p>
                  <strong
                    ><span
                      >8) Carrying out business purposes:&nbsp;</span
                    ></strong
                  ><span>&nbsp;</span
                  ><span
                    >such as to update your customer data; to maintain data
                    accuracy; to perform data analytic for risk prevention (e.g.
                    develop a model to predict the possibility of non-performing
                    loan, or predict the chances of accident); to perform
                    customer risk assessments; to perform institutional risk
                    control, auditing and audit record keeping, analyzing credit
                    risk; to keep business records and otherwise to operate,
                    manage, and maintain our business operations; to maintain
                    our IT operations, management of communication system,
                    operation of IT security and IT security audit; and to
                    maintain internal business management for internal
                    compliance requirements, policies, and procedures; to keep
                    record of the frequency of visits;</span
                  >
                </p>
                <p>
                  <strong
                    ><span
                      >9) Compliance with regulatory and compliance
                      obligations:&nbsp;</span
                    ></strong
                  ><span
                    >To comply with legal obligations, legal proceedings, or
                    government authorities' orders which can include orders from
                    government authorities outside Thailand, and/or cooperate
                    with court, regulators, government authorities, and law
                    enforcement bodies when we reasonably believe we are legally
                    required to do so, and when disclosing your Personal Data is
                    strictly necessary to comply with the said legal
                    obligations, proceedings, or government orders; to provide
                    and handle tax declaration; to contact with tax authorities,
                    financial service regulators, and other regulatory and
                    governmental bodies, and investigating or preventing
                    crime;</span
                  >
                </p>
                <p>
                  <strong
                    ><span
                      >10) Functioning of our sites and platform:&nbsp;</span
                    ></strong
                  ><span
                    >such as to administer, operate, track, monitor, and manage
                    our sites and platform to facilitate and ensure that they
                    function properly, efficiently, and securely; to facilitate
                    your experience on our sites and platform; improve the
                    layout and content of our sites and platform; to allow you
                    to access our available systems and provide technical
                    assistance</span
                  >
                </p>
                <p>
                  <strong><span>11) Protection of our interests:</span></strong
                  ><span
                    >&nbsp;To protect the security and integrity of our
                    business; to detect and prevent misconduct within our
                    premises, for example, to detect, prevent, and respond to
                    fraud claims, and to determine fraud risk and identify
                    fraudulent transactions, intellectual property infringement
                    claims, or violations of law; to manage and prevent loss of
                    our assets and property; to perform sanction list checking,
                    risk management, internal audits and records, asset
                    management, system, and other business controls; to follow
                    up on incidents; to prevent and report criminal offences and
                    to protect the security and integrity of our business; for
                    reference and evidence related to claims or
                    litigation;</span
                  >
                </p>
                <p>
                  <strong><span>12) Corporate transaction</span></strong
                  ><span
                    >: in the event of sale, transfer, merger, reorganization,
                    or similar event we may transfer your information to one or
                    more third parties as part of that transaction;</span
                  >
                </p>
                <p>
                  <strong><span>13)</span></strong
                  ><span>&nbsp;</span><strong><span>Life</span></strong
                  ><span
                    >: To prevent or suppress a danger to a person’s life, body,
                    or health.</span
                  >
                </p>
                <p>
                  <span
                    >If you fail to provide your Personal Data when requested,
                    we may not be able to provide our products and services to
                    you.&nbsp;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h4><span>2.2.3.&nbsp;</span><span>Co-working</span></h4>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <span
                    >We may collect, use, and/or disclose your Personal Data for
                    the following purposes:</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >1) To provide products and services to you:</span
                    ></strong
                  ><span
                    >&nbsp;To enter into a contract and manage our contractual
                    relationship with you; to carry out contract details,
                    financial transaction and services related to the payments
                    including transaction checks, verification, and
                    cancellation; to manage the use of access card; to process
                    on your membership; to keep evidence records; and to invite
                    you to participate in events and our services, to organize
                    events, place and other services for you;</span
                  >
                </p>
                <p>
                  <strong><span>2) Marketing and Communications:</span></strong
                  ><span
                    >&nbsp;To provide marketing, communications, special offers,
                    privilege, promotions, notices, news, events information
                    about products and services from us, One Bangkok Group, our
                    affiliates, subsidiaries and/or business partners in
                    accordance with preferences you have expressed directly or
                    indirectly;&nbsp;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >3) Prize drawing, competitions, and other
                      offers/promotions:</span
                    ></strong
                  ><span
                    >&nbsp;To allow you to participate to promotions, special
                    offers, competitions, prize drawing, privilege on such using
                    exclusive spaces, and other offers/promotions;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >4) Registration and Authentication:&nbsp;</span
                    ></strong
                  ><span
                    >To register, verify, identify, and authenticate you or your
                    identity;&nbsp;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >5) To communicate and manage our relationship with
                      you:&nbsp;</span
                    ></strong
                  ><span
                    >To communicate with you in relation to the products and
                    services you obtain from us and receive information about
                    the products and services from you; to process and update
                    your information</span
                  ><span
                    >; to facilitate your use of the products and services; to
                    handle customer service-related queries, request, feedback,
                    complains, warranty claims, disputes or indemnity; to deal
                    with technical issues and commercial terms</span
                  ><span>;&nbsp;</span>
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong
                    ><span
                      >6) To process transactions and or payments:</span
                    ></strong
                  ><span
                    >&nbsp;such as to process payments or transactions, billing,
                    processing, clearing, refunding, or reconciliation
                    activities. This includes all financial, transaction or
                    payment related record keeping, issuance of bills, tax
                    invoice, payment receipts and delivery of such;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>7) Profiling and data analytics:</span></strong
                  ><span
                    >&nbsp;to undertake data analytics for products and services
                    development, market research, surveys, assessments, and
                    behaviour; to perform data analytic to improve our marketing
                    performances and the offerings and sales of our products and
                    services;&nbsp;</span
                  ><span>to evaluate your interest on the solutions;</span
                  ><span
                    >&nbsp;to perform data analytic for system improvement (e.g.
                    develop model classifying customer group for better service
                    provision); to perform data analytic to increase business
                    opportunity; t</span
                  ><span
                    >o evaluate, develop, manage, improve, research and develop
                    the services, products, system, and business operations for
                    you and all of our customers</span
                  ><span>;&nbsp;</span>
                </p>
                <p>
                  <strong
                    ><span
                      >8) Carrying out business purposes:&nbsp;</span
                    ></strong
                  ><span>&nbsp;</span
                  ><span
                    >such as to update your customer data; to maintain data
                    accuracy; to perform data analytic for risk prevention (e.g.
                    develop a model to predict the possibility of non-performing
                    loan, or predict the chances of accident); to perform
                    customer risk assessments; to perform institutional risk
                    control, auditing and audit record keeping, analyzing credit
                    risk; to keep business records and otherwise to operate,
                    manage, and maintain our business operations; to maintain
                    our IT operations, management of communication system,
                    operation of IT security and IT security audit; and to
                    maintain internal business management for internal
                    compliance requirements, policies, and procedures; to keep
                    record of the frequency of visits;</span
                  >
                </p>
                <p>
                  <strong
                    ><span
                      >9) Compliance with regulatory and compliance
                      obligations:&nbsp;</span
                    ></strong
                  ><span
                    >To comply with legal obligations, legal proceedings, or
                    government authorities' orders which can include orders from
                    government authorities outside Thailand, and/or cooperate
                    with court, regulators, government authorities, and law
                    enforcement bodies when we reasonably believe we are legally
                    required to do so, and when disclosing your Personal Data is
                    strictly necessary to comply with the said legal
                    obligations, proceedings, or government orders; to provide
                    and handle tax declaration; to contact with tax authorities,
                    financial service regulators, and other regulatory and
                    governmental bodies, and investigating or preventing
                    crime;</span
                  >
                </p>
                <p>
                  <strong
                    ><span
                      >10) Functioning of our sites and platform:&nbsp;</span
                    ></strong
                  ><span
                    >such as to administer, operate, track, monitor, and manage
                    our sites and platform to facilitate and ensure that they
                    function properly, efficiently, and securely; to facilitate
                    your experience on our sites and platform; improve the
                    layout and content of our sites and platform; to allow you
                    to access our available systems and provide technical
                    assistance</span
                  >
                </p>
                <p>
                  <strong><span>11) Protection of our interests:</span></strong
                  ><span
                    >&nbsp;To protect the security and integrity of our
                    business; to detect and prevent misconduct within our
                    premises, for example, to detect, prevent, and respond to
                    fraud claims, and to determine fraud risk and identify
                    fraudulent transactions, intellectual property infringement
                    claims, or violations of law; to manage and prevent loss of
                    our assets and property; to perform sanction list checking,
                    risk management, internal audits and records, asset
                    management, system, and other business controls; to follow
                    up on incidents; to prevent and report criminal offences and
                    to protect the security and integrity of our business; for
                    reference and evidence related to claims or
                    litigation;</span
                  >
                </p>
                <p>
                  <strong><span>12) Corporate transaction</span></strong
                  ><span
                    >: in the event of sale, transfer, merger, reorganization,
                    or similar event we may transfer your information to one or
                    more third parties as part of that transaction;</span
                  >
                </p>
                <p>
                  <strong><span>13)</span></strong
                  ><span>&nbsp;</span><strong><span>Life</span></strong
                  ><span
                    >: To prevent or suppress a danger to a person’s life, body,
                    or health.</span
                  >
                </p>
                <p>
                  <span
                    >If you fail to provide your Personal Data when requested,
                    we may not be able to provide our products and services to
                    you.&nbsp;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h4><span>2.2.4. Retails</span></h4>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <span
                    >We may collect, use, and/or disclose your Personal Data for
                    the following purposes:</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >1) To provide products and services to you:</span
                    ></strong
                  ><span
                    >&nbsp;To enter into a contract and manage our contractual
                    relationship with you; to carry out contract details,
                    financial transaction and services related to the payments
                    including transaction checks, verification, and
                    cancellation; to process on receipt and invoice issuance,
                    cash disbursement, and account payable; to process on your
                    membership;&nbsp;</span
                  ><span
                    >to keep evidence records; to invite you to participate in
                    events and our services, to organize events, place and other
                    services for you;</span
                  >
                </p>
                <p>
                  <strong><span>2) Marketing and Communications:</span></strong
                  ><span
                    >&nbsp;To provide marketing, communications, special offers,
                    privilege, promotions, notices, news, events information
                    about products and services from us, One Bangkok Group, our
                    affiliates, subsidiaries and/or business partners in
                    accordance with preferences you have expressed directly or
                    indirectly;&nbsp;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >3) Prize drawing, competitions, and other
                      offers/promotions:</span
                    ></strong
                  ><span
                    >&nbsp;To allow you to participate to promotions, special
                    offers, competitions, prize drawing, privilege on such using
                    exclusive spaces, and other offers/promotions;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >4) Registration and Authentication:&nbsp;</span
                    ></strong
                  ><span
                    >To register, verify, identify, and authenticate you or your
                    identity;&nbsp;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >5) To communicate and manage our relationship with
                      you:&nbsp;</span
                    ></strong
                  ><span
                    >To communicate with you in relation to the products and
                    services you obtain from us and receive information about
                    the products and services from you; to process and update
                    your information</span
                  ><span
                    >; to facilitate your use of the products and services; to
                    handle customer service-related queries, request, feedback,
                    complains, warranty claims, disputes or indemnity; to deal
                    with technical issues and commercial terms</span
                  ><span>;&nbsp;</span>
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong
                    ><span
                      >6) To process transactions and or payments:</span
                    ></strong
                  ><span
                    >&nbsp;such as to process payments or transactions, billing,
                    processing, clearing, refunding, or reconciliation
                    activities. This includes all financial, transaction or
                    payment related record keeping, issuance of bills, tax
                    invoice, payment receipts and delivery of such;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>7) Profiling and data analytics:</span></strong
                  ><span
                    >&nbsp;to undertake data analytics for products and services
                    development, market research, surveys, assessments, and
                    behaviour; to perform data analytic to improve our marketing
                    performances and the offerings and sales of our products and
                    services;&nbsp;</span
                  ><span>to evaluate your interest on the solutions;</span
                  ><span
                    >&nbsp;to perform data analytic for system improvement (e.g.
                    develop model classifying customer group for better service
                    provision); to perform data analytic to increase business
                    opportunity; t</span
                  ><span
                    >o evaluate, develop, manage, improve, research and develop
                    the services, products, system, and business operations for
                    you and all of our customers</span
                  ><span>;&nbsp;</span>
                </p>
                <p>
                  <strong
                    ><span
                      >8) Carrying out business purposes:&nbsp;</span
                    ></strong
                  ><span>&nbsp;</span
                  ><span
                    >such as to update your customer data; to maintain data
                    accuracy; to perform data analytic for risk prevention (e.g.
                    develop a model to predict the possibility of non-performing
                    loan, or predict the chances of accident); to perform
                    customer risk assessments; to perform institutional risk
                    control, auditing and audit record keeping, analyzing credit
                    risk; to keep business records and otherwise to operate,
                    manage, and maintain our business operations; to maintain
                    our IT operations, management of communication system,
                    operation of IT security and IT security audit; and to
                    maintain internal business management for internal
                    compliance requirements, policies, and procedures; to keep
                    record of the frequency of visits;</span
                  >
                </p>
                <p>
                  <strong
                    ><span
                      >9) Compliance with regulatory and compliance
                      obligations:&nbsp;</span
                    ></strong
                  ><span
                    >To comply with legal obligations, legal proceedings, or
                    government authorities' orders which can include orders from
                    government authorities outside Thailand, and/or cooperate
                    with court, regulators, government authorities, and law
                    enforcement bodies when we reasonably believe we are legally
                    required to do so, and when disclosing your Personal Data is
                    strictly necessary to comply with the said legal
                    obligations, proceedings, or government orders; to provide
                    and handle tax declaration; to contact with tax authorities,
                    financial service regulators, and other regulatory and
                    governmental bodies, and investigating or preventing
                    crime;</span
                  >
                </p>
                <p>
                  <strong
                    ><span
                      >10) Functioning of our sites and platform:&nbsp;</span
                    ></strong
                  ><span
                    >such as to administer, operate, track, monitor, and manage
                    our sites and platform to facilitate and ensure that they
                    function properly, efficiently, and securely; to facilitate
                    your experience on our sites and platform; improve the
                    layout and content of our sites and platform; to allow you
                    to access our available systems and provide technical
                    assistance</span
                  >
                </p>
                <p>
                  <strong><span>11) Protection of our interests:</span></strong
                  ><span
                    >&nbsp;To protect the security and integrity of our
                    business; to detect and prevent misconduct within our
                    premises, for example, to detect, prevent, and respond to
                    fraud claims, and to determine fraud risk and identify
                    fraudulent transactions, intellectual property infringement
                    claims, or violations of law; to manage and prevent loss of
                    our assets and property; to perform sanction list checking,
                    risk management, internal audits and records, asset
                    management, system, and other business controls; to follow
                    up on incidents; to prevent and report criminal offences and
                    to protect the security and integrity of our business; for
                    reference and evidence related to claims or
                    litigation;</span
                  >
                </p>
                <p>
                  <strong><span>12) Corporate transaction</span></strong
                  ><span
                    >: in the event of sale, transfer, merger, reorganization,
                    or similar event we may transfer your information to one or
                    more third parties as part of that transaction;</span
                  >
                </p>
                <p>
                  <strong><span>13)</span></strong
                  ><span>&nbsp;</span><strong><span>Life</span></strong
                  ><span
                    >: To prevent or suppress a danger to a person’s life, body,
                    or health.</span
                  >
                </p>
                <p>
                  <span
                    >If you fail to provide your Personal Data when requested,
                    we may not be able to provide our products and services to
                    you.&nbsp;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h4><span>2.2.5 Software Application</span></h4>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >1) To provide products and services to you:</span
                    ></strong
                  ><span
                    >&nbsp;To enter into a contract and manage our contractual
                    relationship with you; to carry out contract details,
                    financial transaction and services related to the payments
                    including transaction checks, verification, and
                    cancellation; to manage the use of access card or QR Code;
                    to process on your access or membership; to keep evidence
                    records; and to invite you to participate in events and our
                    services, to organize events, place and other services for
                    you;</span
                  >
                </p>
                <p>
                  <strong><span>2) Marketing and Communications:</span></strong
                  ><span
                    >&nbsp;To provide marketing, communications, special offers,
                    privilege, promotions, notices, news, events information
                    about products and services from us, One Bangkok Group, our
                    affiliates, subsidiaries and/or business partners in
                    accordance with preferences you have expressed directly or
                    indirectly;&nbsp;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >3) Prize drawing, competitions, and other
                      offers/promotions:</span
                    ></strong
                  ><span
                    >&nbsp;To allow you to participate to promotions, special
                    offers, competitions, prize drawing, privilege on such using
                    exclusive spaces, and other offers/promotions;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >4) Registration and Authentication:&nbsp;</span
                    ></strong
                  ><span
                    >To register, verify, identify, and authenticate you or your
                    identity;&nbsp;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <strong
                    ><span
                      >5) To communicate and manage our relationship with
                      you:&nbsp;</span
                    ></strong
                  ><span
                    >To communicate with you in relation to the products and
                    services you obtain from us and receive information about
                    the products and services from you; to process and update
                    your information</span
                  ><span
                    >; to facilitate your use of the products and services; to
                    handle customer service-related queries, request, feedback,
                    complains, warranty claims, disputes or indemnity; to deal
                    with technical issues and commercial terms</span
                  ><span>;&nbsp;</span>
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong
                    ><span
                      >6) To process transactions and or payments:</span
                    ></strong
                  ><span
                    >&nbsp;such as to process payments or transactions, billing,
                    processing, clearing, refunding, or reconciliation
                    activities. This includes all financial, transaction or
                    payment related record keeping, issuance of bills, tax
                    invoice, payment receipts and delivery of such;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>7) Profiling and data analytics:</span></strong
                  ><span
                    >&nbsp;to undertake data analytics for products and services
                    development, market research, surveys, assessments, and
                    behaviour; to perform data analytic to improve our marketing
                    performances and the offerings and sales of our products and
                    services;&nbsp;</span
                  ><span>to evaluate your interest on the solutions;</span
                  ><span
                    >&nbsp;to perform data analytic for system improvement (e.g.
                    develop model classifying customer group for better service
                    provision); to perform data analytic to increase business
                    opportunity; t</span
                  ><span
                    >o evaluate, develop, manage, improve, research and develop
                    the services, products, system, and business operations for
                    you and all of our customers</span
                  ><span>;&nbsp;</span>
                </p>
                <p>
                  <strong
                    ><span
                      >8) Carrying out business purposes:&nbsp;</span
                    ></strong
                  ><span>&nbsp;</span
                  ><span
                    >such as to update your customer data; to maintain data
                    accuracy; to perform data analytic for risk prevention (e.g.
                    develop a model to predict the possibility of non-performing
                    loan, or predict the chances of accident); to perform
                    customer risk assessments; to perform institutional risk
                    control, auditing and audit record keeping, analyzing credit
                    risk; to keep business records and otherwise to operate,
                    manage, and maintain our business operations; to maintain
                    our IT operations, management of communication system,
                    operation of IT security and IT security audit; and to
                    maintain internal business management for internal
                    compliance requirements, policies, and procedures; to keep
                    record of the frequency of visits;</span
                  >
                </p>
                <p>
                  <strong
                    ><span
                      >9) Compliance with regulatory and compliance
                      obligations:&nbsp;</span
                    ></strong
                  ><span
                    >To comply with legal obligations, legal proceedings, or
                    government authorities' orders which can include orders from
                    government authorities outside Thailand, and/or cooperate
                    with court, regulators, government authorities, and law
                    enforcement bodies when we reasonably believe we are legally
                    required to do so, and when disclosing your Personal Data is
                    strictly necessary to comply with the said legal
                    obligations, proceedings, or government orders; to provide
                    and handle tax declaration; to contact with tax authorities,
                    financial service regulators, and other regulatory and
                    governmental bodies, and investigating or preventing
                    crime;</span
                  >
                </p>
                <p>
                  <strong
                    ><span
                      >10) Functioning of our sites and platform:&nbsp;</span
                    ></strong
                  ><span
                    >such as to administer, operate, track, monitor, and manage
                    our sites and platform to facilitate and ensure that they
                    function properly, efficiently, and securely; to facilitate
                    your experience on our sites and platform; improve the
                    layout and content of our sites and platform; to allow you
                    to access our available systems and provide technical
                    assistance</span
                  >
                </p>
                <p>
                  <strong><span>11) Protection of our interests:</span></strong
                  ><span
                    >&nbsp;To protect the security and integrity of our
                    business; to detect and prevent misconduct within our
                    premises, for example, to detect, prevent, and respond to
                    fraud claims, and to determine fraud risk and identify
                    fraudulent transactions, intellectual property infringement
                    claims, or violations of law; to manage and prevent loss of
                    our assets and property; to perform sanction list checking,
                    risk management, internal audits and records, asset
                    management, system, and other business controls; to follow
                    up on incidents; to prevent and report criminal offences and
                    to protect the security and integrity of our business; for
                    reference and evidence related to claims or
                    litigation;</span
                  >
                </p>
                <p>
                  <strong><span>12) Corporate transaction</span></strong
                  ><span
                    >: in the event of sale, transfer, merger, reorganization,
                    or similar event we may transfer your information to one or
                    more third parties as part of that transaction;</span
                  >
                </p>
                <p>
                  <strong><span>13)</span></strong
                  ><span>&nbsp;</span><strong><span>Life</span></strong
                  ><span
                    >: To prevent or suppress a danger to a person’s life, body,
                    or health.</span
                  >
                </p>
                <p>
                  <span
                    >If you fail to provide your Personal Data when requested,
                    we may not be able to provide our products and services to
                    you.&nbsp;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>14)</span></strong
                  ><strong><span>&nbsp;</span></strong
                  ><strong><span>Functional Purpose:&nbsp;</span></strong
                  ><span
                    >To operate our website on the Web server. In addition, the
                    short-term storage of log files is expedient in order to
                    subsequently investigate attempted attacks on the Web server
                    or any misuse.&nbsp;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <ol start="15" type="1">
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;</span>Cookies:
                    <span>Please see our Cookies Policy&nbsp;</span
                    ><a href="#_8._Cookies_Policy"
                      ><u><span>[here]</span></u></a
                    >
                  </li>
                </ol>
                <p><span>&nbsp;</span></p>
                <ol start="16" type="1">
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;</span>Web Analytics Services:
                    <span
                      >Please see our Cookies Policy regarding Web Analytics
                      Services&nbsp;</span
                    ><a href="#_1.2.2_Web_Analytics"
                      ><u><span>[here]</span></u></a
                    >
                  </li>
                </ol>
                <p><span>&nbsp;</span></p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <h2>
                  <span
                    >3. To whom we may disclose or transfer your Personal
                    Data</span
                  >
                </h2>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <span
                    >We may disclose or transfer your Personal Data to the
                    following third parties who collects, uses and discloses
                    Personal Data in accordance with the purpose under this
                    Policy. These third parties may be located in Thailand and
                    areas outside Thailand. You can visit their privacy policy
                    to learn more details on how they collect, use and disclose
                    your Personal Data as you are also subject to their privacy
                    policies.</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h3><span>3.1. One Bangkok Group 's data ecosystem</span></h3>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >As One Bangkok  is part of a One Bangkok Co.,
                    Ltd., One Bangkok Holdings , One Bangkok Ventures
                    , TCC Assets , Frasers Property Holding
                    (Thailand) , Frasers Property Limited, Frasers
                    Property Management Services (Thailand) 
                    (Collectively referred to as “</span
                  ><a name="_Hlk66118703"><span>One Bangkok Group</span></a
                  ><span
                    >”) which all collaborate and partially share customer
                    services and systems including website-related services and
                    systems, we may need to transfer your Personal Data to, or
                    otherwise allow access to such Personal Data by other
                    companies within One Bangkok Group for the purposes set out
                    in this Privacy Policy. This will allow other companies
                    within One Bangkok Group to rely on consent obtained by
                    One Bangkok &nbsp;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h3><span>3.2. Our service providers</span></h3>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >We may use other companies, agents or contractors to
                    perform services on behalf or to assist with the provision
                    of products and services to you. We may share your Personal
                    Data to our service providers or third-party suppliers
                    including, but not limited to (1) computer program
                    developer, software developer, IT service providers and IT
                    support company; (2) marketing, advertising media, designer,
                    creative, and communications agencies; (3) campaign, event,
                    and market organizers, and CRM agency; (4) data storage and
                    cloud service providers; (5) property management service
                    provider; (6) sale agencies; (7) logistic and courier
                    service providers; (8) payment and payment system service
                    providers; (9) research agencies; (10) analytics service
                    providers; (11) survey agencies; (12) call center; (13)
                    telecommunications and communication service providers; (14)
                    outsourced administrative service providers; (15) printing
                    service providers.</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >In the course of providing such services, the service
                    providers may have access to your Personal Data. However, we
                    will only provide our service providers with the information
                    that is necessary for them to perform the services, and we
                    ask them not to use your information for any other purposes.
                    We will ensure that the service providers we work with will
                    keep your Personal Data secure as required under the
                    laws.&nbsp;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h3><span>3.3. Our business partners</span></h3>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >We may disclose your personal data to companies that we
                    have partnered with to offer or enhance products and
                    services for our customers or prospective customers, for
                    example, financial institution partner, access solution
                    company, telecommunication company, sponsors, co-branded
                    partners and other third parties that we conduct joint
                    marketing and cross promotion with.</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h3><span>3.4. Third parties required by law&nbsp;</span></h3>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >In certain circumstances, we may be required to disclose or
                    share your Personal Data in order to comply with a legal or
                    regulatory obligations. This includes any law enforcement
                    agency, court, regulator, government authority or other
                    third party where we believe it is necessary to comply with
                    a legal or regulatory obligation, or otherwise to protect
                    our rights, the rights of any third party or individuals’
                    personal safety, or to detect, prevent, or otherwise address
                    fraud, security, or safety issues.&nbsp;</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h3>
                  <span>3.5. Professional</span><span>&nbsp;advisors&nbsp;</span>
                </h3>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >This includes asset management service providers, lawyers,
                    technicians and auditors who assist in running our business,
                    and defending or bringing any legal claims.&nbsp;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <h3>
                  <span>3.6. Assignee of rights and/or obligations&nbsp;</span>
                </h3>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <span
                    >Third parties as our assignee, in the event of any
                    reorganization, merger, business transfer, whether in whole
                    or in part, sale, purchase, joint venture, assignment,
                    transfer or other disposition of all or any portion of our
                    business, assets or stock or similar transaction; will
                    comply with this Privacy Policy to respect your Personal
                    Data.&nbsp;</span
                  >
                </p>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <h2>
                  <span>4. International transfers of your Personal Data</span>
                </h2>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >We may disclose or transfer your Personal Data to third
                    parties or servers located overseas, which the destination
                    countries may or may not have the same data protection
                    standards. We take steps and measures to ensure that your
                    Personal Data is securely transferred and that the receiving
                    parties have in place suitable data protection standards or
                    other derogations as allowed by laws. We will request your
                    consent where consent to cross-border transfer is required
                    by law.</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h2><span>5. How long do we keep your Personal Data</span></h2>
                <p>
                  <strong><span>&nbsp;</span></strong>
                </p>
                <p>
                  <span
                    >We keep your Personal Data only for so long as we need the
                    Personal Data to fulfil the purposes we collected it for,
                    and to satisfy our business and/or our legal and regulatory
                    obligations. How long we keep your Personal Data depends on
                    the nature of the data. Some information may be retained for
                    longer, where we are required to do so by law.</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h2><span>6. Your rights as a data subject</span></h2>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >Subject to applicable laws and exceptions thereof, you may
                    have the following rights to:</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <ol type="1">
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Access:<span
                      >&nbsp;You may have the right to access or request a copy
                      of the Personal Data we are collecting, using and
                      disclosing about you. For your own privacy and security,
                      we may require you to prove your identity before providing
                      the requested information to you.&nbsp;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Rectification: <span>&nbsp;</span
                    ><span
                      >You may have the right to have incomplete, inaccurate,
                      misleading, or or not up-to-date Personal Data that we
                      collect, use and disclose about you rectified.</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Data
                    Portability:
                    <span
                      >You may have the right to obtain Personal Data we hold
                      about you, in a structured, electronic format, and to send
                      or transfer such data to another data controller, where
                      this is (a) Personal Data which you have provided to us,
                      and (b) if we are processing such data on the basis of
                      your consent or to perform a contract with you.</span
                    ><span>&nbsp;&nbsp;</span>
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Objection:<span
                      >&nbsp;You may have the right to object to certain
                      collection, use and disclosure of your Personal Data such
                      as objecting to direct marketing.&nbsp;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Restriction:<span
                      >&nbsp;You may have the right to restrict the use of your
                      Personal Data in certain circumstances.&nbsp;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Withdraw Consent:<span
                      >&nbsp;For the purposes you have consented to our
                      collecting, using and disclosing of your Personal Data,
                      you have the right to withdraw your consent at any
                      time.&nbsp;</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                    >Deletion:
                    <span
                      >You may have the right to request that we delete or
                      de-identity Personal Data that we collect, use and
                      disclose about you, except we are not obligated to do so
                      if we need to retain such data in order to comply with a
                      legal obligation or to establish, exercise, or defend
                      legal claims.</span
                    >
                  </li>
                  <li>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Lodge
                    a complaint:
                    <span
                      >You may have the right to lodge a complaint to the
                      competent authority where you believe our collection, use
                      and disclosure of your Personal Data is unlawful or
                      noncompliant with applicable data protection law.</span
                    >
                  </li>
                </ol>
                <p><span>&nbsp;</span></p>
                <h2><span>7. Our Contact Details&nbsp;</span></h2>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >If you wish to contact us to exercise the rights relating
                    to your Personal Data or if you have any queries about your
                    Personal Data under this Privacy Policy, please contact us
                    or our Data Protection Officer at:</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
          
                <p><span>&nbsp;</span></p>
                <p><span>&nbsp;</span></p>
                <p><span>&nbsp;</span></p>
                <p><br /></p>
                <p><span>&nbsp;</span></p>
                <h2>
                  <a name="_8._Cookies_Policy"></a><a name="_Cookies_Policy"></a
                  ><span>Cookies Policy</span>
                </h2>
                <h3>
                  <span
                    >1.1 Information we collect through online technology</span
                  >
                </h3>
                <p>
                  <span
                    >Technologies such as cookies, beacons, tags, local and
                    cloud storage, and scripts are used by us and our
                    affiliates, and other companies, such as third-party
                    technology service providers and web analytics providers.
                    These technologies make it easier for you to navigate
                    through our websites (including Mobile Applications) and to
                    help us manage the content on our websites (including Mobile
                    Applications) and are used to analyze trends, administer the
                    sites, track users' movements around the site (including
                    which websites and Mobile Applications you clicked upon
                    arrival at our websites or Mobile Applications), and gather
                    demographic information about our user base.</span
                  >
                </p>
                <h3>
                  <span
                    >1.2 Information we collect without your cooperation</span
                  >
                </h3>
                <h4><span>1.2.1 Functional Purpose</span></h4>
                <p>
                  <span
                    >In the case of use of our website for purely informational
                    purposes, we collect and use the access data automatically
                    transmitted to us by your Internet browser and store this in
                    our so-called log file on the server. This involves the
                    client's file request, the date and time of the requested
                    page view, the success of the page retrieval, the
                    transferred quantity of data, the type of browser you used
                    and the version, the operating system you use and also the
                    IP address assigned to you by the provider, and the webpage
                    from which you visit us. This data is technically necessary
                    to operate our website on the Web server. In addition, the
                    short-term storage of log files is expedient in order to
                    subsequently investigate attempted attacks on the Web server
                    or any misuse. Accordingly, our legitimate interest in this
                    data processing consists of enabling us to provide you with
                    our offers on the basis of these conditions. Your personal
                    data shall be deleted if it is no longer required for this
                    purpose.</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h4><span>1.2.1 Cookies</span></h4>
                <p>
                  <span
                    >We use so-called cookies on our website. Cookies are text
                    files that are stored in your browser when you visit our
                    website and that collect information about your use of our
                    website. This information assists us in better understanding
                    user requirements and the technical behaviour of our website
                    in order to improve, based on this information, the content,
                    operability and functionality of the website. Cookies do not
                    damage your computer and do not contain any viruses. The
                    cookies used on our website are primarily so-called session
                    cookies that are automatically deleted when you close the
                    browser. They create a so-called session ID for your browser
                    with which various browser requests of your browser can be
                    matched to a session so that you are recognized once again
                    when you return with a browser to our website. The session
                    cookies are deleted when you close the browser.</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p>
                  <span
                    >You have the option to set your browser so that these
                    cookies are not stored in the first place, or so that the
                    cookies are deleted at the end of your Internet session.
                    However, in this case please note that where applicable, you
                    cannot use all of the functions of our web pages.</span
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <h4>
                  <a name="_1.2.2_Web_Analytics"></a
                  ><span>1.2.2 Web Analytics Services</span>
                </h4>
                <p>
                  <strong><span>Google Universal Analytics</span></strong>
                </p>
                <p>
                  <span
                    >At One Bangkok , Google Universal Analytics is
                    used, which is a web analysis service of Google Inc., 1600
                    Amphitheatre Parkway, Mountain View, CA 94043, USA
                    (“Google”). Google Universal Analytics uses cookies. Through
                    this, it is possible to assign data, sessions, and
                    interactions across the terminal devices used to a generated
                    user ID on the basis of a pseudonym, and to thus analyse
                    your usage behaviour across devices. The information
                    generated by the cookies about your use of our website will
                    be routinely transferred to a Google server in the USA and
                    stored there. However, due to the activation of IP
                    anonymising (“IP-Masking”) on our website, your IP address
                    will be abbreviated by Google within the member states of
                    the European Union or in other contracting states of the
                    Agreement on the European Economic Area. Only in exceptional
                    cases will the full IP address be abbreviated only after
                    being transferred to the USA. For these cases, Google has
                    agreed to be subject to the</span
                  ><span>&nbsp;</span
                  ><a href="https://www.privacyshield.gov/EU-US-Framework"
                    ><u><span>EU-US-Privacy-Shield</span></u></a
                  ><span
                    >. The IP address transmitted by your browser within the
                    scope of Google Analytics shall not be combined with other
                    data of Google. Google uses the information obtained through
                    the application of cookies on our behalf to analyse your use
                    of our website, in order to compile reports concerning
                    website activities, and to render additional services to us
                    associated with use of the website and the Internet. Therein
                    lies our legitimate interest in the data processing by
                    engagement of Google as the processor. We have concluded a
                    corresponding agreement for order processing with Google
                    according to Art. 28 DSGVO that ensures that Google will
                    only process your personal data on our behalf, strictly
                    subject to our instructions, and in accordance with
                    applicable data protection law. You may prevent the storage
                    of cookies by means of an appropriate setting in your
                    browser. Nevertheless, we are permitted to note that in this
                    case you may be unable, where applicable, to use all
                    functions of the website to the full extent. Furthermore,
                    you can prevent gathering and processing of the previously
                    described data by Google in that you download and install a
                    browser plug-in available</span
                  ><span>&nbsp;</span
                  ><a href="https://tools.google.com/dlpage/gaoptout?hl=en"
                    ><u><span>here</span></u></a
                  ><span
                    >. Apart from that, you can obtain an opt out cookie here
                    through the installation of which you prevent data gathering
                    by Google, which is helpful in particular in those cases in
                    which the deactivation add-on does not function, for
                    example, on mobile terminal devices. If you use our website
                    with various browsers/terminal devices, the steps described
                    are required for all browsers/terminal devices. You may find
                    additional information on data protection with the use of
                    Google Universal Analytics at</span
                  ><span>&nbsp;</span
                  ><a
                    href="https://support.google.com/analytics/answer/2838718?hl=en&amp;ref_topic=6010376"
                    ><u
                      ><span
                        >https://support.google.com/analytics/answer/2838718?hl=en&amp;ref_topic=6010376</span
                      ></u
                    ></a
                  ><span
                    >. You can also find additional information for protecting
                    your data with the use of Google services under the
                    following links:</span
                  >
                </p>
                <p>
                  <br /><a href="http://www.google.com/analytics/terms/th.html"
                    ><u
                      ><span
                        >http://www.google.com/analytics/terms/th.html</span
                      ></u
                    ></a
                  ><span>&nbsp;</span><br /><a
                    href="https://policies.google.com"
                    ><u><span>https://policies.google.com</span></u></a
                  >
                </p>
                <p><span>&nbsp;</span></p>
                <p><span>&nbsp;</span></p>
                <p><span>&nbsp;</span></p>
                <p><span>&nbsp;</span></p>
              </div>

            
           
            </v-row>
          </v-card>
        </v-row>
      </v-container>
    </v-card>
    <v-row class="mt-4" style="padding-top: 10%;">
      <v-col cols="12" md="6" style="text-align: center;">
        <v-btn
          color="primary"
          class="white--text mt-2 text-capitalize"
          router
          width="300"
          style="font-size: 45px;border-radius: 50px;"
          height="100"
          @click="BackToMainPage()"
        >
          {{ $t("message.Reject") }}
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" style="text-align: center;">
        <v-btn
          color="primary"
          class="white--text mt-2 text-capitalize"
          router
          width="300"
          style="font-size: 45px;border-radius: 50px"
          height="100"
          :disabled="offsetTop < 700"
          @click="GotoIdentifySelection()"
        >
          {{ $t("message.Accept") }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
// import enurl from "@/api/environment";

export default {
  data: () => ({
    offsetTop: 0,
  }),

  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
      console.log(this.offsetTop);
    },
    BackToMainPage() {
      let self = this;
      self.$router.push("/MainMenu");
    },

    GotoIdentifySelection() {
      let self = this;
      self.$router.push("/IdentifySelection");
    },
  },
};
</script>
<style>
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 10px;
  height: 8px;
  background-color: #ffffff; /* or add it to the track */
}
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: skyblue;
}

.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}

.awlist1 {
  list-style: none;
  counter-reset: awlistcounter15_0;
}

.awlist1 > li:before {
  content: counter(awlistcounter15_0) ")";
  counter-increment: awlistcounter15_0;
}

.awlist2 {
  list-style: none;
  counter-reset: awlistcounter16_0;
}

.awlist2 > li:before {
  content: counter(awlistcounter16_0) ")";
  counter-increment: awlistcounter16_0;
}

.awlist3 {
  list-style: none;
  counter-reset: awlistcounter18_0;
}

.awlist3 > li:before {
  content: counter(awlistcounter18_0) ")";
  counter-increment: awlistcounter18_0;
}

.awlist4 {
  list-style: none;
  counter-reset: awlistcounter19_0;
}

.awlist4 > li:before {
  content: counter(awlistcounter19_0) ")";
  counter-increment: awlistcounter19_0;
}

.awlist5 {
  list-style: none;
  counter-reset: awlistcounter19_0 4;
}

.awlist5 > li:before {
  content: counter(awlistcounter19_0) ")";
  counter-increment: awlistcounter19_0;
}

.awlist6 {
  list-style: none;
  counter-reset: awlistcounter22_0;
}

.awlist6 > li:before {
  content: counter(awlistcounter22_0) ")";
  counter-increment: awlistcounter22_0;
}

.awlist7 {
  list-style: none;
  counter-reset: awlistcounter21_0;
}

.awlist7 > li:before {
  content: counter(awlistcounter21_0) ")";
  counter-increment: awlistcounter21_0;
}

.awlist8 {
  list-style: none;
  counter-reset: awlistcounter12_0;
}

.awlist8 > li:before {
  content: counter(awlistcounter12_0) ")";
  counter-increment: awlistcounter12_0;
}

.awlist9 {
  list-style: none;
  counter-reset: awlistcounter13_0;
}

.awlist9 > li:before {
  content: counter(awlistcounter13_0) ")";
  counter-increment: awlistcounter13_0;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
