import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DropDownListComponent, FilteringEventArgs, SelectEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { ClientResponse } from 'src/app/Objects/API/client/ClientResponse';
import { ClientService } from 'src/app/Services/client/client.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  clients: ClientResponse[];
  filteredClients: ClientResponse[];
  accountItems: string[];
  fields: Object;
  clientSelectionForm: FormGroup;

  @ViewChild('clientDdl')
  public dropDownListObject!: DropDownListComponent;

  constructor(private clientService: ClientService) {
    this.clients = [];
    this.filteredClients = [];
    this.accountItems = ['Sign in', 'Project'];
    this.fields = { text: 'name', value: 'id' };
    this.clientSelectionForm = new FormGroup({
      clientDdl: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.fetchClients();
  }

  repopulateDropdown() {
    this.filteredClients = this.clients;
  }

  submitClientForm(): void {
    alert(this.clientSelectionForm.get('clientDdl')?.value);
  }

  onFiltering(e: FilteringEventArgs): void {
    this.clients = this.clients.filter((client: ClientResponse) => client.name.toLowerCase().startsWith(e.text));
  }

  selectionChange(event: SelectEventArgs) {
    const selectedItem = event.itemData as ClientResponse;
    ClientService.selectedClient = this.clients.find((client: ClientResponse) => client.id === selectedItem.id);
  }

  private fetchClients(): void {

    this.clientService.list().toPromise()
      .then((clients: ClientResponse[]) => {
        this.clients = clients;
        this.filteredClients = clients;
        this.clientSelectionForm.controls['clientDdl'].setValue(this.clients[0].id, { onlySelf: true });
      });

  }

}
