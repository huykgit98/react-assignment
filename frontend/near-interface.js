export class Rep {
  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;
  }

  async getPosts({ method, from_index, limit }) {
    const posts = await this.wallet.viewMethod({
      contractId: this.contractId,
      args: { from_index: from_index, limit: limit },
      method: method,
    });
    return posts;
  }
}
