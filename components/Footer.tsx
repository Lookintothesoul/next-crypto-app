import Image from "next/image";

const iconSize = 28;

export default function Footer() {
  return (
    <footer className="h-16 w-full border-t border-white">
      <div className="flex h-full flex-row items-center justify-center gap-2">
        <div>
          <a href="https://www.youtube.com">
            <Image
              src="/youtube.svg"
              width={iconSize}
              height={iconSize}
              alt="logo"
            />
          </a>
        </div>
        <div>
          <a href="https://www.whatsapp.com/?lang=ru_RU">
            <Image
              src="/whatsapp.svg"
              width={iconSize}
              height={iconSize}
              alt="logo"
            />
          </a>
        </div>
        <div>
          <a href="https://vk.com/feed">
            <Image
              src="/vk.svg"
              width={iconSize}
              height={iconSize}
              alt="logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
