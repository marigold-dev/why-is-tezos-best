
<header class="container">

<div>

<section> 

![header](./images/header.webp)

</section>

<section>

<h1>Why is <b>Tezos</b> the Best</h1>

[Decentralization](#decentralization)

[Self-Amendment and Governance](#governance)

[The Ecosystem](#ecosystem)

</section>

</div>

</header>

<section class="pro container" id="decentralization">

<div>

<section>

<h2>Decentralization</h2>

Tezos is one of the only **truly decentralized blockchains**. 

People were a long time ago concerned by [Proof-of-Stake and its risk of centralization](https://www.reddit.com/r/ethereum/comments/6d1mca/proof_of_stake_leads_to_centralization_with_worse/). In reality, one can just compare the baker distribution of Tezos to the miner distribution of Bitcoin or Ethereum


Public blockchains are all about decentralisation and transparency, preventing tampering and censorship by distributing their consensus to a maximum number of validator nodes. However, they differ in the overall cost required to operate a node and in the actual distribution of nodes. For instance, running a high-end node such as the one required for the Solana blockchain can cost more than a $1,000 a month. Such blockchains made the choice of a vertical scaling approach: improving the chain's performance requires using always newer hardware. This makes it harder or unprofitable for small operators to join the network's consensus, which in turn will lead to centralization of the nodes in huge data centers.

<div class="table">

| Blockchain | Validators | Superminority | 
|------------|------------|---------------|
| **Tezos**  | **409**    | **5**         |
| Algorand   | 323        | 13            |
| Avalanche  | 1240       | 26            |
| BNB Chain  | 26         | 1             |
| Cosmos     | 125        | 7             |
| Flow       | 422        | _?_           |
| Near       | 127        | 10            |
| Polkadot   | 100        | 4             |
| Solana     | 2086       | 30            |

{.pure-table  .pure-table-horizontal}

</div>

On the other end of the spectrum, Tezos is one of the lightest blockchain, and chooses to run on hardware that costs a fraction of the other blockchains' nodes. With this horizontal scaling approach, applications that require a higher computational power are delegated to specialized rollups or sidechains. This makes it much easier to run a node from smaller data centers, or even from home, and so one of [the most energy efficient blockchain](https://tezos.com/carbon/).

<div class="table">


| Blockchain | Validator min Hadware                      | min Stake  | KYC          |
|------------|--------------------------------------------|------------|--------------|
| **Tezos**  | **Rasp. Pi 4 / 8GB RAM / 100GB Disk**      | **6,000 XTZ**  | **No**   |
| Algorand   | Rasp. Pi 4 / 8GB RAM / 500GB Disk          | 0.1 ALGO   | No           | 
| Avalanche  | 8 vCPU / 16GB RAM / TB Disk                | 2,000 AVAX | No           |
| Cosmos     | 2 vCPU / 2GB RAM / 80GB Disk               | select by voting power  | No           |
| Flow       | 2 vCPU / 16GB RAM / 200GB Disk             | ?          | Yes          |
| Near       | 8 vCPU / 24GB RAM / 1TB Disk               | 36,871 NEAR| No           |
| Polkadot   | 4 vCPU / 16GB RAM / 1TB Disk               | 1,885,693.855 DOT  | Yes           |
| Solana     | 12 vCPU / 256GB RAM / 2TB Disk             | 0.02685864 SOL (breakeven is 50,000 SOL) | No           |

{.pure-table  .pure-table-horizontal}

</div>


</section>

<section>

_Tezos bakers distribution_
![Tezos bakers distribution](./images/tezos-staking.webp)
{.center}

_Ethereum Stake distribution_
![Ethereum Stake distribution](./images/eth-staking.webp)
{.center}


_Bitcoin mining pools hashrate distribution_
![Bitcoin mining pools hashrate distribution](./images/bitcoin-miningpools.webp)
{.center}

_Carbon emission_
![PoS Chain carbon footprint](./images/co2-emissions.webp)
{.center}

Consistent with this, Tezos requirements for a validator to join the network are among the lowest, as the largest part of the stake can be provided by delegators. Unlike Polkadot, Polygon or Flow, no identification procedure is required to join the network. This makes Tezos one of the most decentralized proof of stake blockchain.

</section>

</div>

<div class="column">




</div>

</section>

<section class="pro container" id="governance">

<div>

<section>

<h2>Self-Amendment and Governance</h2>

Tezos is the main blockchain with a working Self-Amendment mechanism, going through a proper on-chain Governance process, rather than being controlled by a centralized authority.

While it tooks Ethereum years to move to Proof-of-Stake, **Tezos is at its 12th version**!

In Tezos, all stakeholders can participate in governing the protocol by delegating their $XTZ to a baker.

Tezos Goverance lies in its on-chain mechanism to propose changes to the economic protocol where any baker can propose to Tezos commonwealth a protocol amendment proposal. Then bakers can vote for-or-against these changes and activate it or not depending on the results of the vote.

The protocol, the vote and the activation processes are part of the economic protocol itself.
 
To do so, it follows five steps, called five periods
<div>

</div>
<button class="title">Proposal Period </button>

<div class="panel">

<p class="description">
Proposal and selection of the amendment to explore
</p>

</div>
<button class="title">Exploration Vote Period </button>

<div class="panel">

<p class="description">
Vote for or against proposal
</p>

</div>
<button class="title">Cooldown Period</button>

<div class="panel">

<p class="description">
Test and discussion about the proposal
</p>

</div>
<button class="title">Promotion Vote Period </button>

<div class="panel">

<p class="description">
Vote for the activation
</p>

</div>
<button class="title">Adoption Period </button>

<div class="panel">

<p class="description">
Preparation of the activation
</p>

</div>

</section>

<section>

Exploration and Promotion votes are very conservatives: the amendment proposal requires tu reach a [quorum](https://opentezos.com/tezos-basics/governance-on-chain/#quorum-computation) - currently above 49.85% - with a supermajority of 80% in favor of the proposal. Each winning amendment reflect a commitment of Tezos community. No centralized authority can enforce a proposal to Tezos Commonwealth.

Once bakers approve alteration to the Tezos chain, adjustments or amendments, it will automatically be implemented on the blockchain through smart contracts.


When a hardfork happens on a chain, any miner (PoW) or validator (PoS) can vote by chosing which chain follow. If at least one validator still follow the old chain, both exist then all coins and contracts are duplicated. Even mecanism like difficulty bomb on The Merge had prevent EthereumPOW to exist.
Some chains like cosmos try consensus with a vote on "paper" via a DAO but the upgrade itself remain a hardfork, so a fork is still possible.
On the other hand self amendment's blockchain make upgrade happens for all, whenever a vote win.

<div class="table">


| Blockchain | Model              | Proposers      | Voters          | Forks                          |
|------------|--------------------|----------------|-----------------|--------------------------------|
| **Tezos**  | **Self amendment** | **Any baker**  | **Bakers**      | **None**                       |
| Bitcoin    | Hard fork          | Decentralized  | Miners          | Bitcoin Cash, Bitcoin Gold, eCash |
| Ethereum   | Hard fork          | Decentralized  | Validators      | Ethereum Classic, EthereumPOW  |
| Algorand   | Self amendment     | Centralized    | Governance sit  | None                           | 
| Avalanche  | Hard fork          | Ava Labs       | Validators      | None                           | 
| Cosmos     | DAO + Hard fork    | Anyone         | Stakers         | None                           | 
| Flow       | Hard fork          | Centralized    | Stakers         | None                           | 
| Near       | Hard fork          | NEAR Foundation| Validators      | None                           | 
| Polkadot   | Self amendment     | Anyone         | Depends on proposal's Origin | None              | 
| Solana     | Hard fork          | Solana Labs    | Validators      | None                           | 


{.pure-table .pure-table-horizontal}


</div>

Combining self-amendment & onchain gouvernance allow Tezos to implement more efficient, expressive, and scalable solutions.

  

</section>

</div>

</section>

<section class="pro container" id="ecosystem">

<div>

<section>

<h2>The Ecosystem</h2>

Based on its innovative governance and a proven ability to ensure upgradability without discontinuing the chain of blocks or risking assets for its contributors, Tezos has been increasingly able to bring in exciting renowned and new partners, stakeholders and mediatic characters.
 
<h3>The Map of the Tezos ecosystem</h3>
 
As an energy-efficient and upgradable protocol, Tezos brings together developers, artists, or institutions that want to build the future of Web3 through entities and applications that can be found on [tezos.com/ecosystem](https://tezos.com/ecosystem). Always evolving, this list displays the majority of all the dozens of projects that are being developed in categories such as: block explorers, baking tools, community, DeFi, Dev Tools, NFTs, Gaming, Digital identity, stablecoins.

<h3>Open source </h3>

An open-source blockchain, Tezos offers a tremendous amount of quality content to start building: an obvious and very user-friendly first step drives to the [Tezos Developer Portal](https://tezos.com/developers/) to explore education, tools, resources, and community. To dive deeper and experiment with the technical and economic concepts behind Tezos, Opentezos.com offers in-depth tutorials and guidelines to  build a dapp step-by-step.

![Developer's conrtibutions](./images/dev-contribs.webp)
{.center}

<h3>Arts</h3>
 
If Tezos is home to builders, creators, and innovators, art is at the center of all of it, to the point where Tezos called itself **the art blockchain**.

<div>

</div>
<button class="title">Permanent Art Collection (PAC) </button>

<div class="panel">

<p class="description">
In May 2022, Tezos Foundation launche the first-of-its-kind Permanent Art Collection (PAC), chaired by world-renowned photographer and activist Misan Harriman. Its mission is to enlighten and comprise curated Digital Art Galleries that celebrate artists that create in the Tezos ecosystem.
</p>

</div>
<button class="title">Tezos x Art Basel </button>

<div class="panel">

<p class="description">
For more than a year, Tezos has partnered with Art Basel to showcase talented local and virtual artists from Miami to Basel to Hong Kong and get the largest audience onboard the blockchain. Their latest joint groundbreaking event features an outdoor fair in Paris for State of the Art (October 19-23).

</p>

</div>
<button class="title">Tezos promotes all kinds of cultural events all along the year </button>

<div class="panel">

<p class="description">
 Block/Space in Austin (Texas) during SXSW 2022 conference, Tezos Art Week on Twitter, **SonarMàtica** by Tezos in Barcelona to name a few.

</p>

</div>
<button class="title">NFT </button>

<div class="panel">

<p class="description">
Tezos is definitely a NFT friendly blockchain, home to one of the leading platforms such as objkt.com, Teia and fx(hash). OneOf has also been in the spotlight for welcoming pop idol Doja Cat and iconic producer Quincy Jones, or reggae singer Zigy Marley. To make newcomers and long-time users feel secure and let them focus on their art, the NFT ecosystem keeps growing in a friendly environment gathered together on https://tezos.art/.

</p>

</div>
<button class="title">Proof of the strong and deep bond between Tezos and art </button>

<div class="panel">

<p class="description">
Its founders Arthur and Kathleen Breitman recently explored, in the recorded interview **Art for Art(ist)'s Sake**, how and why artist communities have flourished on Tezos.
</p>

</div>

</section>

<section>

![NFT Sales Q3 2022](./images/nft-sales.webp)
{.center}

<h3>Public deals</h3>

Tezos have ambitious and thriving marketing collaborations with some of the most famous brands and teams in sports and gaming industries:

<div>

</div>

<div class="scene scene--card">
  <div class="card">
    <div class="card__face card__face--front">
    <img class="card-img" src="./images/ballon.webp"/>
    </div>
    <div class="card__face card__face--back">
    Along with the Ballon d'or trophey which celebrates best soccer player of the year 2022, Karim Benzema received a unique NFT minted on Tezos blockchain. The 23th October a [NFT collection](https://nft.ballondor.com/) was released.</div>
  </div>
</div>
<div class="scene scene--card">
  <div class="card">
    <div class="card__face card__face--front">
    <img class="card-img" src="./images/manchester.webp"/></div>
    <div class="card__face card__face--back">
    Through this partnership, Tezos appears on the Club’s range of training kits and enables several new fan experiences built on Tezos with one of the most popular and successful sports teams in the world. At the time of announcement, statistics show that the collaboration became the most talked-about training kit launch in sports ever. </div>
  </div>
</div>
<div class="scene scene--card">
  <div class="card">
    <div class="card__face card__face--front">
    <img class="card-img" src="./images/redbull.webp"/>
    </div>
    <div class="card__face card__face--back">
   Tezos became the Team's Official Blockchain Partner in June 2021, most notably to  build its first ever NFT fan experience.
</div>
  </div>
</div><div class="scene scene--card">
  <div class="card">
    <div class="card__face card__face--front">
   <img class="card-img" src="./images/pmu.webp"/>
    </div>
    <div class="card__face card__face--back">
    Horse betting giant PMU launched a fantasy sports entertainment platform called “Stables” using Tezos-based NFTs. It enables players to experience “the intensity of horse racing and the endless possibilities of Web3".</div>
  </div>
</div>
<div class="scene scene--card">
  <div class="card">
    <div class="card__face card__face--front">
    <img class="card-img" src="./images/vitality.webp"/>
    </div>
    <div class="card__face card__face--back">
      Along with the Ballon d'or trophey which celebrates best soccer player of the year 2022, Karim Benzema received a unique NFT minted on Tezos blockchain. The 23th October a [NFT collection](https://nft.ballondor.com/) was released.</div>
  </div>
</div><div class="scene scene--card">
  <div class="card">
    <div class="card__face card__face--front">
   <img class="card-img" src="./images/ubisoft.webp"/>
    </div>
    <div class="card__face card__face--back">
    Ubisoft and Tezos launched the Quartz platform, the debut of NFTs for in-game items from the video game company and its first step to develop a true metaverse built on Tezos.</div>
  </div>
</div>

</section>

</div>

</section>




