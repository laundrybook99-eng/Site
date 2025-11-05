export default function FranchiseHero() {
  return (
    <section className="relative bg-[#0D223A] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D1B46A] leading-tight mb-6">
              Own a Profitable{' '}
              <span className="text-[#E3C87D]">Laundry Franchise</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#A8B3C5] mb-8">
              Join India's fastest-growing laundry service network. Low investment, high returns, and complete support.
            </p>
          </div>

          <div className="relative">
            <img
              src="/f.svg"
              alt="Franchise Opportunity"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
