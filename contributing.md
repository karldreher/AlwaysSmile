#  Contributing

Contributions to this extension are welcome and will be included in future releases of the official extensions!

To start, please fork this repository.  PRs should be done into the `development` branch.  Pulls to Master will only be done by the repo owner, from the development branch.  

## Adding new Amazon TLDs
Primarily, updates will most likely be to new Amazon sites.  This extension does *not* redirect all Amazon sites around the world, due to lack of knowledge on the owner's part if it is certain that Amazon Smile is available in all TLD regions for Amazon.  

Two things are needed when adding a new amazon TLD:

- Add the FQDN to the "urls" property within the redirection functions.  Each URL should be on it's own line.
- The same FQDN should be added to each of the manifests in the `chrome` and `firefox` directories.

## Testing
Prior to submitting your PR, you should test this within your own browser(s) to verify that your change works as intended.  After making a change, it is suggested that you: 

- Copy build.sh to the target browser subdirectory, then run `build.sh` from that folder.  
- Sideload the unpacked extension to the browser, or if needed the zipped files.
- Verify that going to the new URL redirects to Amazon Smile as intended.
- Verify that the other URLs are not impacted and also redirect as intended.

Once your manual testing passes, proceed to PR to the `development` branch of this repository.