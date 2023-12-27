// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FunctionComponent } from 'react';

import Slider from 'react-slick';

const LandingPageDesign: FunctionComponent = () => {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
    ]
  };

  return (
    <div className="relative  max-w-[1900px] mx-auto bg-whitesmoke-100 w-full overflow-hidden flex flex-col items-start justify-start text-center text-21xl text-text-heading font-h4-regular">
      <div className="self-stretch bg-whitesmoke-100 flex flex-row items-center justify-between py-5 sm:px-14 px-4 z-[12] text-sm text-text-body-1 font-caption-regular border-b-[1px] border-solid border-whitesmoke-200">
        <img
          className="relative cursor-pointer w-[37.02px] h-9 object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <div className="shrink-0 flex flex-row items-center justify-center gap-[48px]">
          <div className="rounded-17xl shrink-0 flex flex-row items-center justify-center py-3 px-0">
            <div className="relative cursor-pointer sm:block hidden leading-[20px]">Đăng ký xin hỗ trợ</div>
          </div>
          <div className="rounded-17xl cursor-pointer shrink-0 flex flex-row items-center justify-center sm:py-4 py-3 sm:px-6 px-4 text-surface-action-1 border-[1px] border-solid border-surface-action-1">
            <div className="relative leading-[20px]">Đăng ký xin hỗ trợ</div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), url(/background.png)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className="self-stretch  h-[878px] flex flex-col items-start justify-start relative gap-[10px] z-[11] text-41xl text-brand-primary">
        <img
          className="absolute my-0 mx-[!important] top-[224px] left-[calc(50%_-_243px)] w-[486px] h-[654px] overflow-hidden shrink-0 object-cover z-[3]"
          alt=""
          src="/hands-of-book@2x.png"
        />
        <div className="my-0  mx-[!important] absolute top-[62px] sm:min-w-0 min-w-full sm:left-[calc(50%_-_239.5px)] left-0 flex flex-col items-center justify-start gap-[1px] z-[2]">
          <div className="relative leading-[72px] sm:text-[60px] text-[30px] ">DIAMOND FUND</div>
          <b className="relative sm:text-5xl text-base text-center leading-[32px] text-surface-action-1">
            NUÔI ƯỚC MƠ EM QUA TRANG SÁCH
          </b>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[51px] left-[295px] w-[849.18px] h-[116.22px] object-cover opacity-[0.04] z-[1]"
          alt=""
          src="/ornament@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[1440px] h-[878px] object-cover opacity-[0.08] z-[0]"
          alt=""
          src="/background-nn@2x.png"
        />
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start md:py-28 py-7 px-14 relative md:gap-[36px] gap-[15px] z-[10]">
        <div className="flex flex-col items-start justify-start z-[2]">
          <div className="relative sm:text-[40px] text-[29px] tracking-[-0.02em] leading-[56px]">
            Thời gian diễn ra
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[56px] z-[1] text-41xl text-surface-action-1">
          <div className="shrink-0 flex flex-col md:text-[60px] text-[39px] items-center justify-center">
            <b className="relative leading-[72px]">{`15 `}</b>
            <div className="relative text-xl leading-[30px] text-text-body-1">
              Ngày
            </div>
          </div>
          <div className="shrink-0 flex md:text-[60px] text-[39px] flex-col items-center justify-center">
            <b className="relative leading-[72px]">01</b>
            <div className="relative text-xl leading-[30px] text-text-body-1">
              Tháng
            </div>
          </div>
          <div className="shrink-0 flex md:text-[60px] text-[39px] flex-col items-center justify-center">
            <b className="relative leading-[72px]">2024</b>
            <div className="relative text-xl leading-[30px] text-text-body-1">
              Năm
            </div>
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[-241.5px] left-[259px] w-[922px] h-[900.46px] object-cover opacity-[0.04] z-[0]"
          alt=""
          src="/decoration@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row   items-center justify-between md:p-14 p-4 z-[9]">
        <div className="flex-1 relative  max-w-[960px]  mx-auto rounded-[40px] overflow-hidden md:h-[540px] h-[350px] z-[0]">
          <img
            className="absolute top-[0px] left-1/2 rounded-[40px] overflow-hidden transform -translate-x-1/2 max-w-[960px] mx-auto   md:h-[540px] h-[350px] object-cover"
            alt=""
            src="/image@2x.png"
          />
          <img
            className="absolute top-1/2   transform -translate-x-1/2 -translate-y-1/2 cursor-pointer left-1/2 md:w-[166.32px] w-[130px]  overflow-hidden object-cover opacity-[0.8]"
            alt=""
            src="/media--play@2x.png"
          />
        </div>
      </div>
      <div className='h-[150px] mb-[40px] cursor-pointer lg:w-[940px] w-full mx-auto'>
        <Slider {...settings}>
          <div>
            <img
              className="rounded-1/2 w-[115px] h-[115px] object-contain"
              alt=""
              src="/td.png"
            />
          </div>
          <div>
            <img
              className="rounded-1/2 w-[115px] h-[115px] object-contain"
              alt=""
              src="/td.png"
            />
          </div>
          <div>
            <img
              className="rounded-1/2 w-[115px] h-[115px] object-contain"
              alt=""
              src="/td.png"
            />
          </div>
          <div>
            <img
              className="rounded-1/2 w-[115px] h-[115px] object-contain"
              alt=""
              src="/td.png"
            />
          </div>
          <div>
            <img
              className="rounded-1/2 w-[115px] h-[115px] object-contain"
              alt=""
              src="/td.png"
            />
          </div>
          <div>
            <img
              className="rounded-1/2 w-[115px] h-[115px] object-contain"
              alt=""
              src="/td.png"
            />
          </div>
          <div>
            <img
              className="rounded-1/2 w-[115px] h-[115px] object-contain"
              alt=""
              src="/td.png"
            />
          </div>
          <div>
            <img
              className="rounded-1/2 w-[115px] h-[115px] object-contain"
              alt=""
              src="/td.png"
            />
          </div>

        </Slider>
      </div>
      <div className="self-stretch flex flex-col  items-start justify-start z-[8] text-xl text-text-body-2">
        {/* <div className="self-stretch flex flex-row items-center justify-center pt-14 px-14 pb-6 gap-[48px]">
          <div className="w-[115px] flex flex-col items-center justify-center gap-[16px] z-[5] text-surface-action-1">
            <img
              className="relative rounded-29xl w-16 h-16 object-cover"
              alt=""
              src="/unsplasheidsbauwj0@2x.png"
            />
            <b className="relative leading-[30px]">Thùy Dương</b>
          </div>
          <div className="w-[115px] flex flex-col items-center justify-center gap-[16px] opacity-[0.6] z-[4]">
            <img
              className="relative rounded-29xl w-16 h-16 object-cover"
              alt=""
              src="/unsplasheidsbauwj0@2x.png"
            />
            <div className="relative leading-[30px]">Hồng Linh</div>
          </div>
          <div className="w-[115px] flex flex-col items-center justify-center gap-[16px] opacity-[0.6] z-[3]">
            <img
              className="relative rounded-29xl w-16 h-16 object-cover"
              alt=""
              src="/unsplasheidsbauwj0@2x.png"
            />
            <div className="relative leading-[30px]">Khả Hào</div>
          </div>
          <div className="w-[115px] flex flex-col items-center justify-center gap-[16px] opacity-[0.6] z-[2]">
            <img
              className="relative rounded-29xl w-16 h-16 object-cover"
              alt=""
              src="/unsplasheidsbauwj0@2x.png"
            />
            <div className="relative leading-[30px]">Thanh Vân</div>
          </div>
          <div className="w-[115px] flex flex-col items-center justify-center gap-[16px] opacity-[0.6] z-[1]">
            <img
              className="relative rounded-29xl w-16 h-16 object-cover"
              alt=""
              src="/unsplasheidsbauwj0@2x.png"
            />
            <div className="relative leading-[30px]">Phương Anh</div>
          </div>
          <div className="w-[115px] flex flex-col items-center justify-center gap-[16px] opacity-[0.6] z-[0]">
            <img
              className="relative rounded-29xl w-16 h-16 object-cover"
              alt=""
              src="/unsplasheidsbauwj0@2x.png"
            />
            <div className="relative leading-[30px]">Tuấn Anh</div>
          </div>
        </div> */}
        <div className="w-full  mx-auto  bg-surface-secondary py-[24px] overflow-hidden shrink-0 text-13xl text-surface-action-1">
          <div className="mx-auto max-w-[1440px]  justify-center lg:flex-row flex-col  flex lg:items-center items-start py-2 lg:px-14 px-4 box-border lg:gap-[64px] gap-[24px]">
            <img
              className=" lg:w-[305px] w-[166px] lg:h-[418px] h-[228px] object-cover z-[2]"
              alt=""
              src="/be1.png"
            />
            <div className="max-w-[941px]  flex flex-col items-start justify-center lg:gap-[38px] gap-[14px] z-[1]">
              <div className="self-stretch flex-col flex items-start justify-start">
                <b className="relative tracking-[-0.02em] md:text-[24px] text-[16px]">
                  Đặng Thị Thùy Dương
                </b>
                <div className="relative text-[14px] tracking-[-0.02em] mt-[8px] text-text-body-2">
                  “Bống”
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[16px] lg:text-base text-[12px] text-text-body-1 font-caption-regular">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img src="/lop.png" alt="" />
                  <div className="relative leading-[24px]">Lớp 4</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img src="/nha.png" alt="" />
                  <div className="relative leading-[24px]">
                    Thôn 6, Nghĩa Ninh, Đồng Hới, Quảng Bình
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img src="/truong.png" alt="" />
                  <div className="relative leading-[24px]">
                    Trường tiểu học Nghĩa Ninh
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-left">
                  <img src="/chitiet.png" alt="" />
                  <div className="flex-1 relative max-w-[540px] leading-[24px]">
                    Gia đình bé thuộc diện hộ nghèo, mẹ mất sớm, bé đang ở với
                    bố. Bố em đang bị bệnh xã hội, sức đề kháng yếu, công việc
                    không ổn định, mấy năm liền em luôn đạt học sinh giỏi, xuất
                    sắc. Học phí hiện tại gần 2tr/ 1năm.
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <img src="/dt.png" alt="" />
                  <div className="relative leading-[24px]">
                    Số điện thoại của bố bé: 0942.605.329
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[1440px] h-[569px] object-cover opacity-[0.03] z-[0]"
              alt=""
              src="/background-nn@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[1440px] bg-surface-secondary w-[1440px] h-[569px] flex flex-row items-center justify-start py-0 pr-14 pl-0 box-border gap-[64px]">
            <img
              className="relative w-[379px] h-[569px] object-cover z-[2]"
              alt=""
              src="/unsplasheidsbauwj0@2x.png"
            />
            <div className="w-[941px] flex flex-col items-start justify-center gap-[38px] z-[1]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="relative tracking-[-0.02em] leading-[48px]">
                  Nguyễn Hồng Linh
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[16px] text-base text-text-body-1 font-caption-regular">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="rounded-21xl bg-surface-action-1 shrink-0 flex flex-row items-center justify-start p-2">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/file--notebook@2x.png"
                    />
                  </div>
                  <div className="relative leading-[24px]">Lớp 1</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="rounded-21xl bg-surface-action-1 shrink-0 flex flex-row items-center justify-start p-2">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/file--notebook@2x.png"
                    />
                  </div>
                  <div className="relative leading-[24px]">Sóc Trăng</div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="rounded-21xl bg-surface-action-1 shrink-0 flex flex-row items-center justify-start p-2">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/file--notebook@2x.png"
                    />
                  </div>
                  <div className="relative leading-[24px]">Trường Nhơn Mỹ</div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-left">
                  <div className="rounded-21xl bg-surface-action-1 shrink-0 flex flex-row items-center justify-start p-2">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/file--notebook@2x.png"
                    />
                  </div>
                  <div className="flex-1 relative leading-[24px]">
                    Bố mẹ đều đi làm thuê
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  <div className="rounded-21xl bg-surface-action-1 shrink-0 flex flex-row items-center justify-start p-2">
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/file--notebook@2x.png"
                    />
                  </div>
                  <div className="relative leading-[24px]">
                    Thầy hiệu trưởng Chín: 0965300634
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute my-0 mx-[!important] top-[0px] left-[0px] w-[1440px] h-[569px] object-cover opacity-[0.03] z-[0]"
              alt=""
              src="/background-nn@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start md:py-[106px] py-[30px] md:px-14 px-4 relative md:gap-[72px] gap-[28px] z-[7]">
        <div className="relative tracking-[-0.02em] leading-[56px] z-[2] md:text-[40px] text-[23px]">
          Mục tiêu - Tầm nhìn - Sứ mệnh
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[125px] left-[943px] w-[100.44px] h-[100.44px] object-contain opacity-[0.1] z-[1]"
          alt=""
          src="/star@2x.png"
        />
        <div className="self-stretch flex flex-col items-center justify-start relative md:gap-[156px] gap-[40px]  z-[0] md:text-xl text-[14px] text-text-body-1">
          <div className="flex flex-col items-center justify-start gap-[24px] z-[2]">
            <div className="relative md:leading-[30px] leading-[24px] md:text-center text-justify inline-block lg:w-[1208px] w-full">
              Mỗi người có một định nghĩa khác nhau về "HẠNH PHÚC". Riêng đối
              với mỗi DTSer, "Hạnh" là "Hạt", "Phúc" là "Phước". Hạnh phúc đơn
              giản là "Hạt phước". Trong hành trình đi tìm hạnh phúc, chúng tôi
              vẫn luôn vun đắp cho hạt mầm tốt lành nảy nở cho mình và cho những
              người xung quanh, đặc biệt là những hoàn cảnh khó khăn cần bàn tay
              san sẻ.
            </div>
            <img
              className="relative md:w-[526px] w-[95%] md:h-[521px] h-[420px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/book@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start py-0 md:px-14 px-1 md:gap-[112px] gap-[16px] z-[1] text-left text-13xl text-surface-action-1">
            <div className="self-stretch  flex md:flex-row flex-col items-start justify-center md:gap-[156px] gap-[0px]">
              <div className="relative tracking-[-0.02em] md:text-[33px] text-[24px] leading-[48px] inline-block w-[150px] shrink-0">
                Mục tiêu
              </div>
              <div className="flex-1 relative md:text-start max-w-[650px] text-justify md:text-xl text-[14px] md:leading-[30px] leading-[24px] text-text-body-1">
                Với tiêu chí "lấy giáo dục là gốc" để chắp cánh, nuôi dưỡng
                những ước mơ, chúng tôi đặt mục tiêu hỗ trợ toàn bộ học phí cho
                5-10 hoàn cảnh khó khăn được đến trường. Tin rằng tri thức và
                tinh thần rèn giũa sẽ là hành trang vững chắc để các em vững
                vàng vươn lên.
              </div>
            </div>
            <div className="self-stretch  flex md:flex-row flex-col items-start justify-center md:gap-[156px] gap-[0px]">
              <div className="relative tracking-[-0.02em] md:text-[33px] text-[24px] leading-[48px] inline-block w-[150px] shrink-0">
                Tầm nhìn
              </div>
              <div className="flex-1 max-w-[650px]  md:text-start text-justify relative md:text-xl text-[14px] md:leading-[30px] leading-[24px] text-text-body-1">
                {`Với tầm nhìn 50 năm, Diamond Fund sẽ là tổ chức thiện nguyện bằng các hoạt động giáo dục được tin cậy và nuôi dưỡng được nhiều "ước mơ" tốt đẹp trở thành sự thật. `}
              </div>
            </div>
            <div className="self-stretch  flex md:flex-row flex-col items-start justify-center md:gap-[156px] gap-[10px]">
              <div className="relative tracking-[-0.02em] md:text-[33px] text-[24px] leading-[48px] inline-block w-[150px] shrink-0">
                Sứ mệnh
              </div>
              <div className="flex-1 md:text-start max-w-[650px] text-justify relative md:text-xl text-[14px] md:leading-[30px] leading-[24px] text-text-body-1">
                Lan tỏa được giá trị của tri thức và những điều tốt đẹp đến đúng
                người - đúng việc.
              </div>
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] top-[-230px] left-[-138px] w-[1604px] h-[1554.95px] object-cover opacity-[0.05] z-[0]"
            alt=""
            src="/decoration@2x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start md:p-14 p-4 relative gap-[56px] z-[6]">
        <div className="flex flex-col items-center justify-start gap-[16px] z-[4]">
          <div className="relative  md:text-[40px] text-[20px]  tracking-[-0.02em] md:leading-[56px] leading-7">
            Nhặt kim cương - Trao yêu thương
          </div>
          <div className="relative text-center  md:text-base text-[12px] leading-[24px] font-caption-regular text-text-sub-heading inline-block lg:w-[982px] w-full">
            Với mỗi quyển sách được bán ra, bạn sẽ đóng góp thêm 50K vào quỹ
            Diamond để giúp các em có có hội được đến trường
          </div>
        </div>
        <div className="flex flex-row  items-start justify-center lg:gap-[72px] gap-8  z-[3] text-xl text-dimgray">
          <div className="shrink-0 flex flex-col items-center justify-center lg:gap-[8px] gap-0">
            <img
              className="relative lg:w-[366px] w-[118px] lg:h-[481px] h-[164px] object-cover"
              alt=""
              src="/doi.png"
            />
            <div className="relative lg:text-[28px] text-[14px] lg:leading-[30px] leading-[24px]">Sách Happy Mom</div>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center lg:gap-[8px] gap-0 text-text-body-1">
            <img
              className="relative lg:w-[366px] w-[118px] lg:h-[481px] h-[164px] object-cover"
              alt=""
              src="/frame@2x.png"
            />
            <div className="relative lg:text-[28px] text-[14px] lg:leading-[30px] leading-[24px]">
              Sách tôi chọn là kim cương
            </div>
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[25px] left-[970px] w-[100.44px] h-[100.44px] object-contain opacity-[0.1] z-[2]"
          alt=""
          src="/star@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[532px] left-[1280px] w-[319.23px] h-[319.23px] object-contain opacity-[0.1] z-[1]"
          alt=""
          src="/star1@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[15px] left-[-160px] w-[319.23px] h-[319.23px] object-contain opacity-[0.1] z-[0]"
          alt=""
          src="/star2@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start lg:pt-28 pt-28 lg:pb-28 pb-28 px-0 z-[5]">
        <div className="self-stretch  bg-text-action-1 h-[764px]  flex flex-col items-start justify-start py-[42px] lg:px-28 px-4 box-border relative lg:gap-[64px] gap-7">
          <div className="self-stretch relative lg:text-[40px] text-[30px] tracking-[-0.02em] leading-[56px] z-[3]">
            Về tác giả
          </div>
          <div className="lg:w-[647px] w-full  flex flex-col items-center justify-start gap-[16px] z-[2] text-left lg:text-5xl text-[20px] text-text-body-1">
            <b className="self-stretch lg:text-left text-center relative leading-[32px]">
              Một chút ngắn gọn, cho những ai chưa biết về La Khuê
            </b>
            <div className="self-stretch relative text-xl leading-[30px]">
              <ul className="m-0 font-inherit  lg:text-inherit text-justify pl-[27px]">
                <li className="lg:mb-0 mb-2">
                  Nhà huấn luyện chuyên sâu về Phong cách Thương Hiệu cao cấp
                  đầu tiên tại Việt Nam
                </li>
                <li className="lg:mb-0 mb-2">
                  Thạc sĩ ngành Truyền Thông Hình Ảnh Thương Hiệu tại Paris
                  2007.
                </li>
                <li className="lg:mb-0 mb-2">{`~ 4.307H trong lĩnh vực xây dựng và phát triển phong cách thương hiệu cao cấp như tập đoàn LVMH, Sony Blog, tạp chí BIBA, Sigler & Henry, ACB bank, VinaSun, Vinafone, Cafe Trung Nguyên, Sữa Abbott, Moobar...`}</li>
                <li className="lg:mb-0 mb-2">
                  Tác giả Việt đầu tiên viết về xây dựng và phát triển phong
                  cách THCN : Diamond You - Tôi chọn là Kim cương ( VN ), Happy
                  Mom xuất bản global trên Amazon.
                </li>
                <li>
                  Nhà sáng lập và cố vấn hệ thống học viện số Diamond You
                  Academy. Với 1.169 H coach online + offline với các CEO, Boss,
                  Content Creators, Coaches ..
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute my-0 mx-[!important] top-[0.12px] right-0  w-[727px] h-[763.91px] z-[1]">
            <img
              className="absolute  top-[560.2px] left-[0px] w-[727px] h-[203.71px] object-cover"
              alt=""
              src="/rectangle-21@2x.png"
            />
            <div className="absolute top-[0px] lg:block hidden left-[190px] w-[536.82px] h-[760.78px]">
              <img
                className="absolute top-[0px] left-[111.92px] w-[424.9px] h-[760.78px] object-cover"
                alt=""
                src="/rectangle-1@2x.png"
              />
              <div className="absolute top-[41.88px] left-[127px] rounded-[50%] bg-gray-100 [filter:blur(100px)] w-[313px] h-[594px] opacity-[0.5]" />
              <div className="absolute top-[677.88px] left-[78.36px] rounded-[50%] [background:linear-gradient(90.21deg,_rgba(46,_46,_46,_0.43),_rgba(46,_46,_46,_0.37))] [filter:blur(60px)] w-[369.45px] h-[38.86px] [transform:_rotate(2.39deg)] [transform-origin:0_0]" />
              <div className="absolute top-[90.35px] left-[0px] w-[485.79px] h-[604.9px]">
                <img
                  className="absolute top-[21.26px] left-[4.59px] w-[481.2px] h-[574.48px] object-contain"
                  alt=""
                  src="/pages@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[463.06px] h-[604.9px] object-contain"
                  alt=""
                  src="/change-here@2x.png"
                />
              </div>
              <img
                className="absolute top-[694.82px] left-[6px] w-[478.08px] h-[65.96px] object-cover opacity-[0.2]"
                alt=""
                src="/image-19@2x.png"
              />
            </div>
          </div>
          <img
            className="absolute my-0 mx-[!important] top-[42px] left-[-1436px] w-[1785.43px] h-[722px] object-cover z-[0]"
            alt=""
            src="/decoration@2x.png"
          />
        </div>
      </div>
      {/* tac gia */}
      <div className='lg:hidden block  mt-28 px-4 mx-auto'>
        <img src="/tg.png" className='w-[80%] object-cover' alt="" />
      </div>
      {/* tac gia */}
      <div className="self-stretch flex flex-col items-center justify-start md:p-0 p-6 relative gap-[72px] z-[4]">
        <div className="relative tracking-[-0.02em] leading-[56px] z-[3]">
          Đóng góp
        </div>
        <div className="flex lg:flex-row flex-col items-start justify-center lg:gap-[156px] gap-[40px] z-[2] text-left text-13xl text-surface-action-1">
          <div className="shrink-0 flex flex-col  items-center justify-start gap-[4px]">
            <b className="relative tracking-[-0.02em] md:text-[32px] text-[22px] md:leading-[48px] leading-[24px]">
              2000+ người
            </b>
            <div className="relative md:text-5xl text-[14px] md:leading-[32px] leading-[20px] text-text-body-2">
              Đã cùng chúng tôi HÀNH ĐỘNG
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-start gap-[4px]">
            <b className="relative tracking-[-0.02em] md:text-[32px] text-[22px] md:leading-[48px] leading-[24px]">
              39.089.000đ
            </b>
            <div className="relative md:text-5xl text-[14px] md:leading-[32px] leading-[20px] text-text-body-2">
              Đã trao đến cho 1.000 ‘Em thơ’
            </div>
          </div>
        </div>
        <div>
          <table className='max-w-[960px]'>
            <tr>
              <th className='w-[93px]'>Tháng</th>
              <th className='w-[112px]'>Source</th>
              <th className='w-[150px]'>Ngày giao dịch</th>
              <th className='w-[180px]'>Số tiền</th>
              <th className='w-[96px] md:table-cell hidden'>Tiền tệ</th>
              <th className='px-2 md:table-cell hidden'>Nội dung chuyển khoản</th>
            </tr>
            <tr>
              <td>1</td>
              <td>MOMO</td>
              <td>1/1/2023</td>
              <td>100.000</td>
              <td className='md:table-cell hidden'>VND</td>
              <td className='px-2 md:table-cell hidden'>Thanh toán cho cây trồng rừng Hạnh Phúc Xanh</td>
            </tr>
            <tr>
              <td>1</td>
              <td>VCB</td>
              <td>1/1/2023</td>
              <td>2.100.000</td>
              <td className='md:table-cell hidden'>VND</td>
              <td className='md:table-cell hidden'>Quy trong cay</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MOMO</td>
              <td>1/1/2023</td>
              <td>500.000</td>
              <td className='md:table-cell hidden'>VND</td>
              <td className='md:table-cell hidden'>Em ung ho NCL</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MOMO</td>
              <td>1/1/2023</td>
              <td>100.000</td>
              <td className='md:table-cell hidden'>VND</td>
              <td className='md:table-cell hidden'>Ung ho NCL</td>
            </tr>
            <tr>
              <td>1</td>
              <td>ACB</td>
              <td>1/1/2023</td>
              <td>200.000</td>
              <td className='md:table-cell hidden'>VND</td>
              <td className='md:table-cell hidden'>Giup trong cay xanh</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MOMO</td>
              <td>1/1/2023</td>
              <td>100.000</td>
              <td className='md:table-cell hidden'>VND</td>
              <td className='md:table-cell hidden'>Em chuyen tien dong gop ung ho</td>
            </tr>
          </table>
          <div className="text-center mt-4 text-[12px] leading-[20px] text-text-body-2 ">
            (Tất cả những khoản đóng góp của bạn sẽ được ghi nhận  <span className='text-[#D7A277] cursor-pointer hover:underline'>tại đây</span>)
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[25px] left-[748px] w-[100.44px] h-[100.44px] object-contain opacity-[0.1] z-[0]"
          alt=""
          src="/star@2x.png"
        />
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-start md:py-28 py-10 px-14 relative md:gap-[112px] gap-[78px] z-[3]">
        <div className="relative tracking-[-0.02em] md:text-[40px] text-[20px]  md:leading-[56px] leading-[30px] z-[4]">
          Hình thức đóng góp
        </div>
        <div className="flex md:flex-row flex-col items-start justify-center gap-[72px]  z-[3] text-base text-text-body-2 font-caption-regular">
          <div className="shrink-0 flex flex-col items-center justify-start relative gap-[72px]">
            <img
              className="relative w-[310px] h-[312px] object-cover z-[0]"
              alt=""
              src="/subtract@2x.png"
            />
            <div className="absolute my-0 mx-[!important] top-[128px] left-[24px] leading-[24px] inline-block w-[262px] z-[1]">
              <p className="m-0">Thông tin CK</p>
              <p className="m-0">STK:</p>
              <p className="m-0">Nội dung</p>
            </div>
            <b className="absolute my-0 mx-[!important] top-[65px] left-[51.5px] text-5xl leading-[32px] inline-block font-h4-regular text-text-body-1 z-[2]">
              Đóng góp định kỳ
            </b>
            <div className="my-0 mx-[!important] absolute top-[-34px] left-[121px] rounded-21xl bg-surface-action-1 overflow-hidden flex flex-row items-center justify-start py-4 px-6 z-[3] border-[1px] border-solid border-surface-action-1">
              <img
                className="relative w-5 h-9 object-cover"
                alt=""
                src="/vector@2x.png"
              />
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-center justify-start relative gap-[72px]">
            <img
              className="relative w-[310px] h-[312px] object-cover z-[0]"
              alt=""
              src="/subtract@2x.png"
            />
            <div className="absolute my-0 mx-[!important] top-[138px] left-[24px] leading-[24px] inline-block w-[262px] h-[97px] shrink-0 z-[1]">
              <p className="m-0">Cá nhân: mua với giá niêm yết</p>
              <p className="m-0">{`Nhóm: từ 20 quyển trở lên -> tặng 1 buổi mini ws với cô La Khuê`}</p>
            </div>
            <div className="absolute my-0 mx-[!important] top-[60px] left-[68.5px] text-text-body-1 z-[2] text-5xl font-h4-regular">
              <p className="m-0">
                <b className="leading-[32px]">Mua sách</b>
              </p>
              <p className="m-0 text-base leading-[24px] font-caption-regular">
                (theo cá nhân/nhóm)
              </p>
            </div>
            <div className="my-0 mx-[!important] absolute top-[-34px] left-[121px] rounded-21xl bg-surface-action-1 overflow-hidden flex flex-row items-center justify-start p-2.5 z-[3] border-[1px] border-solid border-surface-action-1">
              <img
                className="relative w-12 h-12 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/interface--book-open@2x.png"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute my-0 mx-[!important] top-[541px] left-[1314px] w-[184px] h-[184px] object-cover opacity-[0.05] z-[2]"
          alt=""
          src="/burstcircle1@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[20px] left-[-92px] w-[184px] h-[184px] object-cover opacity-[0.05] z-[1]"
          alt=""
          src="/burstcircle1@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[81px] left-[839px] w-[100.44px] h-[100.44px] object-contain opacity-[0.1] z-[0]"
          alt=""
          src="/star@2x.png"
        />
      </div>
      <div className="self-stretch mx-auto lg:w-[960px] w-[95%] flex flex-col items-center justify-start py-26 lg:px-14  px-0 z-[2] text-13xl text-text-action-1">
        <div className="self-stretch lg:h-auto h-[478px]  items-center flex md:flex-row flex-col justify-around  rounded-21xl [background:linear-gradient(180deg,_#24325c,_#172243)] box-border  overflow-hidden shrink-0 z-[0] border-[2px] border-solid border-steelblue">
          <img
            className=""
            alt=""
            src="/lhq.png"
          />
          <div className="flex flex-col items-start justify-center  gap-[16px]">
            <div className="relative tracking-[-0.02em] md:text-[24px] text-[22px]">
              Bạn cần được hỗ trợ học bổng?
            </div>
            <div className="rounded-17xl bg-surface-action-1 shrink-0 flex flex-row items-center justify-center py-2 px-5 text-sm font-caption-regular border-[1px] border-solid border-surface-action-1">
              <div className="relative leading-[20px] cursor-pointer">Liên hệ quỹ</div>
            </div>
          </div>
          {/* <div className="absolute top-[322px] left-[137px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0)_69.27%,_#000)] w-[286px] h-[78px] opacity-[0.2]" /> */}
        </div>
      </div>
      <div className="self-stretch flex lg:flex-row flex-col md:items-start items-center justify-center lg:py-28 py-10 px-0 md:gap-[156px] gap-[48px] z-[1] text-5xl">
        <div className="shrink-0 flex flex-col items-center justify-start md:gap-[48px] gap-[24px]">
          <div className="relative leading-[32px]">Đơn vị tổ chức</div>
          <div className="shrink-0 flex flex-row items-start justify-start md:gap-[64px] gap-[32px] max-w-[1136px] text-base text-text-body-1 font-caption-regular">
            <div className="shrink-0 flex flex-col items-center justify-start gap-[16px]">
              <div className="relative w-[136px] h-[116px] overflow-hidden shrink-0">
                <img
                  className="absolute top-[calc(50%_-_58px)] left-[calc(50%_-_67.79px)] w-[133px] h-[114px] object-cover"
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
              <div className="relative leading-[24px] hidden">Tên đơn vị</div>
            </div>
            <div className="shrink-0 flex flex-col items-center justify-start gap-[16px]">
              <div className="relative w-[136px] h-[116px] overflow-hidden shrink-0">
                <img
                  className="absolute top-[calc(50%_-_58px)] left-[calc(50%_-_68px)] w-[152px] h-[113px] object-cover"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
              <div className="relative leading-[24px] hidden">Tên đơn vị</div>
            </div>
          </div>
        </div>
        <div className="shrink-0 flex flex-col items-center justify-start md:gap-[48px] gap-[24px]">
          <div className="relative leading-[32px]">Đơn vị đồng hành</div>
          <div className="shrink-0 flex flex-row flex-wrap items-start justify-start md:gap-[64px] gap-[32px] max-w-[1136px] text-base text-text-body-1 font-caption-regular">
            <div className="shrink-0 flex flex-col items-center justify-start gap-[16px]">
              <div className="relative w-[136px] h-[116px] overflow-hidden shrink-0">
                <img
                  className="absolute top-[calc(50%_-_37px)] left-[calc(50%_-_55.5px)] w-[111px] h-[73px] object-cover"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className="relative leading-[24px] hidden">Tên đơn vị</div>
            </div>
            <div className="shrink-0 flex flex-col items-center justify-start gap-[16px]">
              <div className="relative w-[136px] h-[116px] overflow-hidden shrink-0">
                <img
                  className="absolute top-[calc(50%_-_58px)] left-[calc(50%_-_56.5px)] w-[114px] h-[114px] object-cover"
                  alt=""
                  src="/image-4@2x.png"
                />
              </div>
              <div className="relative leading-[24px] hidden">Tên đơn vị</div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border  overflow-hidden mx-auto footer-custom flex flex-col items-start justify-start pt-14 md:px-14 px-4 pb-28 gap-[36px] z-[0] text-left text-5xl border-t-[1px] border-solid border-whitesmoke-200">
        <div className=' w-full flex lg:flex-row flex-col  lg:items-center items-start lg:gap-0 gap-[36px] justify-between'>
          <div className="self-stretch flex flex-row  items-center justify-start gap-[24px]">
            <img
              className="relative cursor-pointer w-[37.02px] h-9 object-cover"
              alt=""
              src="/logo@2x.png"
            />
            <div className="relative leading-[32px]">Diamond Fund</div>
          </div>
          <img
            className=" object-cover cursor-pointer"
            alt=""
            src="/quy.png"
          />
        </div>
        <div className="self-stretch flex lg:flex-row flex-col lg:gap-0 gap-9 items-start justify-between text-base font-caption-regular">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[20px] text-center text-[16px] text-text-body-1">
            <div className="rounded-17xl shrink-0 flex flex-row items-center justify-center">
              <div className="relative leading-[20px]">
                Mục tiêu - Tầm nhìn - Sứ mệnh
              </div>
            </div>
            <div className="rounded-17xl shrink-0 flex flex-row items-center justify-center">
              <div className="relative leading-[20px]">
                Nhặt kim cương - Trao yêu thương
              </div>
            </div>
            <div className="rounded-17xl shrink-0 flex flex-row items-center justify-center">
              <div className="relative leading-[20px]">Đóng góp</div>
            </div>
            <div className="rounded-17xl shrink-0 flex flex-row items-center justify-center">
              <div className="relative leading-[20px]">
                Đơn vị tổ chức và đơn vị đồng hành
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[20px]">
            <div className="relative leading-[24px]">Quỹ Diamond Fund</div>
            <div className="shrink-0 flex flex-col items-start justify-start gap-[16px] text-text-body-1">
              <div className="shrink-0 flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/communication--phone@2x.png"
                />
                <div className="relative leading-[24px]">09xxxxxxx</div>
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/communication--mail@2x.png"
                />
                <div className="relative leading-[24px]">xxxx@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[20px]">
            <div className="relative leading-[24px]">Liên hệ hợp tác</div>
            <div className="shrink-0 flex flex-col items-start justify-start gap-[16px] text-text-body-1">
              <div className="shrink-0 flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/user--user-02@2x.png"
                />
                <div className="relative leading-[24px]">Nguyễn Văn A</div>
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/communication--phone@2x.png"
                />
                <div className="relative leading-[24px]">09xxxxxxx</div>
              </div>
              <div className="shrink-0 flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/communication--mail@2x.png"
                />
                <div className="relative leading-[24px]">xxxx@gmail.com</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
};

export default LandingPageDesign;
