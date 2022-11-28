import React, {FC, useState, Fragment} from 'react';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import {fetchUpdateRank} from "../../store/reducers/rank/rankActions";
import {IRankResponse} from "../../models/IRankResponse";

const MainPage:FC = () =>{

    const [nameData, setNameData] = useState<string>('')

    const {rank, isLoading, Error} = useTypeSelector(i => i.rank)
    const {loginResponse} = useTypeSelector(i => i.loginUser)
    const {fetchCreateName, fetchUpdateName, fetchDeleteName, fetchRanksOfNames, setRanksOfNames, fetchUpdateRank} = useAction()

    const [updateId, setUpdateId] = useState<number>(-1)

    const OnClickEvent = () => {
        if (updateId === -1) {
            fetchCreateName(nameData, loginResponse?.access)
            setNameData("")
        }
        else {
            fetchUpdateName(updateId, nameData, loginResponse?.access)
            setUpdateId(-1)
            setNameData("")
        }
    }

    const sortFunc = (items:IRankResponse[]) => {
        for (let i = 0; i < items.length; i++) {
            for(let j = i + 1; j < items.length; j++){
                if(items[i].rankNumber >= items[j].rankNumber){
                    let item = items[i]
                    items[i] = items[j]
                    items[j] = item
                }
            }
        }
        return items
    }

    const OnClickUpdateItems = () => {
        fetchRanksOfNames(loginResponse?.access)
    }

    const OnClickSortingItems = () => {
        setRanksOfNames(sortFunc(rank))
    }

    const OnClickUpdateId = (event : any) => {
        console.log(rank.map(i => i.id))
        const target = event.target as HTMLInputElement
        const id = Number(target.value)
        if(id !== updateId) {
            setUpdateId(id)
            let name = ""
            for(let i = 0; i < rank.length; i++){
                if(rank[i].name.id === id) {
                    name = rank[i].name.name
                    break;
                }

            }
            setNameData(name)
        }else{
            setUpdateId(-1)
            setNameData("")
        }
    }

    const OnClickDelete = (event: any) => {
        const target = event.target as HTMLInputElement
        const id = Number(target.value)
        fetchDeleteName(id, loginResponse?.access)
        if(id === updateId) {
            setUpdateId(-1)
        }
    }

    const onChangeRank = (event: any, id: number) => {
        let items  = rank
        for (let i = 0; i < items.length; i++) {
            if(items[i].id === id){
                items[i].rankNumber = event.target.value
            }
        }

        items = sortFunc(items)

        items[0].rankNumber = 1
        for(let i = 1; i < items.length; i++) {
            if(items[i - 1].rankNumber == items[i].rankNumber){
                items[i].rankNumber = Number(items[i].rankNumber) + 1
            }
        }

        fetchUpdateRank(items, loginResponse?.access)

        setRanksOfNames(items)
    }

    return(
        <div>
            <div className="row">
                <button type="button" onClick={e => {
                    OnClickUpdateItems()
                }} className="btn btn-primary btn-block col-2 mx-auto mb-3">
                    Update Items
                </button>
                <button type="button" onClick={e => {
                    OnClickSortingItems()
                }} className="btn btn-primary btn-block col-2 mx-auto mb-3">
                    Sorting
                </button>
            </div>
            <div className={'row'}>
                <div className="col-8 mb-4 mx-auto">
                    {
                        rank.map((item, index) => {
                                return (
                                    <div key={'key-' + index} className={"border container mb-2 border-2 rounded"}>
                                        <div className={'row d-flex justify-content-between'}>
                                        <div className={'pl-4 col-2'} id={"item-" + item.name.id}>
                                            {"name " + item.name.name}
                                        </div>
                                            <select id="lang" onChange={e => onChangeRank(e, item.id)} className={'col-2'} value={item.rankNumber}>
                                                {
                                                    rank.map((rank, i) => {
                                                        return (
                                                            <option key={'optionKey-' + i } value={rank.rankNumber}>
                                                                {
                                                                    rank.rankNumber
                                                                }
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <button type="button" value={item.name.id} onClick={e => {
                                                OnClickUpdateId(e)
                                            }} className="btn btn-primary btn-block col-2">
                                                {
                                                    updateId === item.name.id ? "Updating" : "Update"
                                                }
                                            </button>
                                            <button type="button" value={item.name.id} onClick={e => {
                                                OnClickDelete(e)
                                            }} className="btn btn-primary btn-block col-2">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
            <div className={'row'}>
                <div className={'col-6 mx-auto'}>
                    <div className="form-outline mb-4">
                        <input type="enterName" id="inputName" value={nameData} className="form-control"
                               onChange={e => setNameData(e.target.value)}/>
                        <label className="form-label" htmlFor="inputName">Enter Name</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <button type="button" onClick={e => {
                    OnClickEvent()
                }} className="btn btn-primary btn-block col-3 mx-auto">
                    {
                        updateId !== -1 ? "Update Name" : "Add Name"
                    }
                </button>
            </div>
        </div>
    )
}

export default MainPage;