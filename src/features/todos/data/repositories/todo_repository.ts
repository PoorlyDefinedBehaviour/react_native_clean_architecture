import ITodoRepository from "../../domain/repositories/todo_repository"
import ITodoLocalDataSource from "../datasources/todo_local_data_source"
import ITodoRemoteDataSource from "../datasources/todo_remote_data_source"
import INetworkInfo from "../../../../core/network/network_info"

class TodoRepository implements ITodoRepository {
  constructor(
    private readonly localDataSource: ITodoLocalDataSource,
    private readonly remoteDataSource: ITodoRemoteDataSource,
    private networkInfo: INetworkInfo
  ) {}
}

export default TodoRepository
