import { NearBindgen, view, Vector } from "near-sdk-js";
import { Post } from "./model";

@NearBindgen({})
class Rep {
  posts: Vector<Post> = new Vector<Post>("v-uid");

  @view({})
  // Returns an array of posts.
  get_posts({
    from_index = 0,
    limit = 10,
  }: {
    from_index: number;
    limit: number;
  }): Post[] {
    return this.posts.toArray().slice(from_index, from_index + limit);
  }
}
