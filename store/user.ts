import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import * as UserDomain from '~/domains/User'

@Module({ stateFactory: true, namespaced: true, name: 'user' })
export default class UserStore extends VuexModule {
  yourself?: UserDomain.User

  @Mutation
  myself(user: UserDomain.User): void {
    this.yourself = user
  }

  // @Action
  // async loadPosts() {
  //   const posts = await fetchPosts()
  //   posts.forEach(post => {
  //     this.addPost(post)
  //   })
  // }
}
