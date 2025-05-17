import { useNavigate } from 'react-router-dom'

const NftDetailsPage = () => {
  const navigate = useNavigate()

  const nftDetails = {
    image: '/public/WhatsApp Image 2025-05-12 at 16.34.39 (2).jpeg',
    name: 'King Ape',
    creator: 'Ralph Edwards',
    bid: '1.52 ETH',
    bidUSD: '$4,230.45',
    endsIn: '12h 30m 15s',
    description:
      'King Ape is part of the exclusive Primate Royalty Collection. This unique piece features a majestic ape adorned with a golden crown, symbolizing power and authority in the digital realm. Created with meticulous attention to detail, this NFT represents the pinnacle of digital art collecting.',
    properties: {
      Background: 'Yellow Gold',
      Accessory: 'Crown',
      Rarity: 'Legendary',
    },
    details: {
      contract: '0x459f...79be',
      tokenId: '7842',
      standard: 'ERC-721',
      blockchain: 'Ethereum',
    },
    history: [
      {
        name: 'Bidder',
        date: 'Date',
        bid: 'Amount',
      },
      {
        name: 'Michael Carter',
        date: 'May 5, 2025 – 10:23 AM',
        bid: '1.52 ETH',
      },
      {
        name: 'Samantha Wilson',
        date: 'May 4, 2025 – 8:45 PM',
        bid: '1.45 ETH',
      },
      {
        name: 'David Thompson',
        date: 'May 3, 2025 – 3:12 PM',
        bid: '1.37 ETH',
      },
    ],
  }

  const collection = [
    {
      image: '/public/WhatsApp Image 2025-05-12 at 16.34.39 (3).jpeg',
      name: 'Party Ape',
      bid: '2.85 ETH',
      creator: 'Esther Johnson',
      route: 'party-ape',
    },
    {
      image: '/public/WhatsApp Image 2025-05-12 at 16.34.40 (4).jpeg',
      name: 'Rebel Ape',
      bid: '2.85 ETH',
      creator: 'Jordan Blake',
      route: 'rabel-ape',
    },
    {
      image: '/public/WhatsApp Image 2025-05-12 at 16.34.40 (7).jpeg',
      name: 'Battle Ape',
      bid: '2.50 ETH',
      creator: 'Chris Njoku',
      route: 'battle-ape',
    },
  ]

  return (
    <div className="p-6 md:p-9 bg-[#F1F5FF] min-h-screen">
      <button
        onClick={() => navigate('/rewards', { state: { activeTab: 'marketplace' } })}
        className="mb-4 flex items-center text-[#010B2A font-semibold "
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14M5 12l6 6m-6-6l6-6"
          />
        </svg>
        Back to Marketplace
      </button>

      <div className="text-[#031A69] text-3xl font-bold mb-8">NFT Details</div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="xl:w-1/3 flex flex-col gap-6 items-center">
            <img src={nftDetails.image} alt={nftDetails.name} className="w-full" />

            <div className="mt-6 flex justify-center">
              <button className="bg-[#CDD7F6] p-3 rounded-md flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                  className="mr-2"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.7"
                    d="M5.25 14.25h-3.5v-3.5m12.5 0v3.5h-3.5m0-12.5h3.5v3.5m-12.5 0v-3.5h3.5"
                  />
                </svg>
                <span>View Full Size</span>
              </button>

              <button className="bg-[#CDD7F6] p-3 ml-6 rounded-md flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mr-2"
                >
                  <path
                    fill="#000"
                    d="m13.12 17.023l-4.199-2.29a4 4 0 1 1 0-5.465l4.2-2.29a4 4 0 1 1 .958 1.755l-4.2 2.29a4 4 0 0 1 0 1.954l4.2 2.29a4 4 0 1 1-.959 1.755M6 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m11-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                  />
                </svg>
                <span>Share</span>
              </button>

              <button className="bg-[#CDD7F6] p-3 ml-6 rounded-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14">
                  <path
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.004 12.383L1.53 7.424c-2.975-2.975 1.398-8.688 5.474-4.066c4.076-4.622 8.43 1.11 5.475 4.066z"
                    stroke-width="1"
                  />
                </svg>
              </button>
            </div>

            <button
              onClick={() => navigate('/rewards/complete-purchase')}
              className="mt-20 bg-[#05238C] text-white px-6 py-3 rounded-md hover:bg-blue-700 text-sm font-semibold w-95 h-13"
            >
              Purchase NFT
            </button>
          </div>

          <div className="md:w-1/2 flex flex-col justify-start">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{nftDetails.name}</h1>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                Edition 1 of 1
              </span>
            </div>

            <p className="mb-4 text-gray-600 text-sm flex items-center">
              By <img src="/images/A-man-(2).png" alt="a man" className="m-1  rounded-3xl" />{' '}
              {nftDetails.creator}
              <img
                src="/images/verification1.png"
                alt="verificationlogo"
                className="ml-2 w-6 h-6"
              />
            </p>

            <div className="bg-white p-4 rounded-xl mb-6  border-gray-300 border-2">
              <div className="font-bold text-[17px] text-gray-900">
                <div className="flex justify-between items-start">
                  <span>Current Bid</span>
                  <span className="text-xs text-gray-400">{`Ends in: ${nftDetails.endsIn}`}</span>
                </div>

                <div className="mt-4">
                  <span className="text-1xl">{nftDetails.bid}</span>
                  <span className="text-[15px] text-black-500 ml-2">({nftDetails.bidUSD})</span>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-2xl font-bold mb-2">Description</h3>
              <p className="text-black-700 mb-6 text-xl">{nftDetails.description}</p>
            </div>

            <div className="mt-7">
              <h3 className="text-2xl font-bold mb-2">Properties</h3>
              <div className="flex gap-4 flex-wrap text-md">
                {Object.entries(nftDetails.properties).map(([key, value]) => (
                  <div
                    key={key}
                    className="border-2 border-gray p-2 rounded-md min-w-[130px] text-center"
                  >
                    <div className="font-sora text-md text-[#111111] uppercase mb-1">{key}</div>
                    <div className="text-[#111111] text-lg font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <h3 className="text-2xl font-bold mb-4">Details</h3>
              <div className="grid grid-cols-[250px_1fr] gap-y-4 text-sm text-[#111111]">
                <div className="flex items-center gap-2 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.8"
                    >
                      <path d="M2 6h4m-4 4h4m-4 4h4m-4 4h4" />
                      <rect width="16" height="20" x="4" y="2" rx="2" />
                      <path d="M15 2v20m0-15h5m-5 5h5m-5 5h5" />
                    </g>
                  </svg>
                  Contract Address:
                </div>
                <div>{nftDetails.details.contract}</div>

                <div className="flex items-center gap-2 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.3"
                    >
                      <path d="M16 10h2m-2 4h2M6.17 15a3 3 0 0 1 5.66 0" />
                      <circle cx="9" cy="11" r="2" />
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                    </g>
                  </svg>
                  Token ID:
                </div>
                <div>{nftDetails.details.tokenId}</div>

                <div className="flex items-center gap-2 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.3"
                    >
                      <path d="M20.25 10.907V7.272c0-.829-.633-1.521-1.453-1.644c-.951-.142-2.18-.376-3.078-.722c-.907-.349-1.997-1.007-2.762-1.505a1.76 1.76 0 0 0-1.914 0c-.764.498-1.855 1.156-2.762 1.505c-.899.346-2.127.58-3.078.722c-.82.123-1.453.815-1.453 1.644v3.635a10.13 10.13 0 0 0 5.363 8.939l.23.123l1.962.946a1.6 1.6 0 0 0 1.39 0l1.961-.946l.23-.123a10.13 10.13 0 0 0 5.364-8.939" />
                      <path d="m15.509 10l-4.076 4.076a.6.6 0 0 1-.849 0l-2.093-2.09" />
                    </g>
                  </svg>
                  Token Standard:
                </div>
                <div>{nftDetails.details.standard}</div>

                <div className="flex items-center gap-2 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="29"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.213 9.787a3.39 3.39 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                    />
                  </svg>
                  Blockchain:
                </div>
                <div>{nftDetails.details.blockchain}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 mb-8">
        <h3 className="text-xl font-bold mb-4">Bid History</h3>
        {nftDetails.history.length > 0 ? (
          <ul className="text-sm divide-y divide-gray-100">
            {nftDetails.history.map((entry, idx) => (
              <li
                key={idx}
                className="grid grid-cols-[1fr_2fr_1fr] items-center gap-4 py-3 text-gray-700"
              >
                <span>{entry.name}</span>
                <span className="text-center">{entry.date}</span>
                <span className="font-semibold text-right">{entry.bid}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm mt-2">No bid history available.</p>
        )}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-bold mb-4">More from this collection</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {collection.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#E4EAFD] border border-gray-100 rounded-xl shadow-sm p-4 text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[60%] mx-auto h-auto object-cover rounded mb-2"
              />
              <h2 className="text-[#111111] text-xl font-semibold mb-1 mr-35">{item.name}</h2>
              <p className="text-sm text-[#111111] mb-1 mr-31">By {item.creator}</p>

              <div className="flex justify-between items-center w-full mb-0">
                <div className="mt-4">
                  <p className="text-xl text-[#111111] mb-1">Current Bid</p>
                  <p className="text-md font-semibold flex items-center gap-1 text-[#111111]">
                    <img src="/images/mdi-ethereum-icon.png" alt="ETH" className="w-6 h-6" />
                    {item.bid}
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/nft/${item.route}`)}
                  className="mt-3 bg-[#05238C] text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
                >
                  Purchase NFT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NftDetailsPage
