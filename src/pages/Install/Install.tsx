import Footer from '@/components/Footer'

const Install = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-5/6 items-center justify-center bg-[#383838]">
        <div className="flex w-full flex-col space-y-4 px-4 text-center font-semibold md:space-y-8 md:px-0">
          <h1 className="font-['helvetica'] text-2xl text-green md:text-[3.4rem]">
            How to Install H2M-Mod
          </h1>
          <p className="text-lg text-white md:text-[22px]">
            To install H2M-Mod, you will need to own Call of Duty: Modern Warfare Remastered.
            <br />
            You can purchase the game from Steam&nbsp;
            <a
              href="https://store.steampowered.com/app/393080/Call_of_Duty_Modern_Warfare_Remastered_2017/"
              target="_blank"
              className="text-green"
            >
              here.
            </a>
          </p>
          <div className="text-base text-white md:text-[1.5rem]">
            <p className="font-bold underline">STEP 1: Install Modern Warfare Remastered</p>
            You will need the full game installed (including the singleplayer)
            <br />
            if you plan on playing our custom maps.
          </div>
          <p className="text-lg text-white md:text-[22px]">
            <p className="font-bold underline">STEP 2: Install the H2M-Mod Launcher</p>
            The download will be provided here when it releases.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Install
