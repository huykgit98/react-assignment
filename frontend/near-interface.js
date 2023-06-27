export class Rep {

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse
  }

  async getPosts() {
    const posts = await this.wallet.viewMethod({ contractId: this.contractId, method: "get_posts" })
    console.log(posts)
    return posts
  }

}