import Image from "next/image";
import LOGO_IMAGE from "../assets/images/logo.png";
import SEARCH_ICON from "../assets/icons/search.png";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      {/* header */}
      <div className="bg-[#141414C2] flex">
        {/* 左大邊 */}
        <div className="flex-1 flex items-center">
          <Image
            src={LOGO_IMAGE}
            alt="logo"
            loading="eager"
            className="ml-14 mr-28"
          />
          <div className="flex gap-x-10">
            <p className="text-white text-nowrap">最新上架</p>
            <p className="text-white text-nowrap">人氣排行</p>
            <p className="text-white text-nowrap">熱門活動</p>
            <p className="text-white text-nowrap">重要公告</p>
            <p className="text-white text-nowrap">網頁儲值</p>
            <p className="text-white text-nowrap">我的遊戲</p>
          </div>
        </div>
        {/* 右邊區塊 */}
        <div className="flex items-center">
          <Image src={SEARCH_ICON} alt="search icon" className="w-6 h-6 mr-2" />
          {/* 登入/註冊 */}
          <div className="py-4 px-2 flex items-center gap-x-2 mr-4">
            <button>登入</button>
            <div className="w-4 h-0 border-b border-[#B0B0B0] rotate-270" />
            <button>註冊</button>
          </div>
          {/* rotate 斜線 */}
          <div className="w-[60.42px] h-0 border-b border-[#B0B0B0] rotate-[294.44deg]" />
          {/* 更多 Menu icon */}
          {/* <Image src={} /> */}
        </div>
      </div>
      {/* 大圖 */}

      {/* 遊戲的部分（簡介描述區、輪播圖區） */}
    </div>
  );
}
